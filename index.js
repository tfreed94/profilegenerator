const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const fs = require("fs");
const idArray = [];
const render = require("./src/page-template.js");
const teamMembers = [];


appMenu = () => {
    createManager = () => {
        console.log("Get your team set up");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter name of team manager",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "You must enter at least one character";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What's the managers id?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Must enter a number larger than 0";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Email for team manager?",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter an email adress";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Office number for team manager",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Must enter a number larger than 0";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });
    }

    createTeam = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What kind of team member do you want to add next?",
                choices: [
                    "Engineer",
                    "Intern",
                    "None"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        });
    }

    addEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Name of engineer?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Must enter at least one character";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "Engineer ID?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return "Choose different ID, ID already taken";
                        } else {
                            return true;
                        }

                    }
                    return "Must enter a number larger than 0";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Email for engineer?",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter an email adress";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Github for engineer?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Use at least one character";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
    }

    addIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Name of intern?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Requires at least one character";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "Intern ID?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return "Choose different ID, ID already taken";
                        } else {
                            return true;
                        }

                    }
                    return "Must enter a number larger than 0";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "Email for intern?",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Enter an email address";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school did your intern attend?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            createTeam();
        });
    }

    buildTeam = () => {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
    createManager();

}

appMenu();
