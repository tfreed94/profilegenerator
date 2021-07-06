const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const fs = require("fs");
const arrayOfIDs = [];
const render = require("./src/page-template.js");
const team = [];


mainPage = () => {
    setManager = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "Enter name of team manager",
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "What's the managers id?",
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "Email for team manager?",
                },
                {
                    type: "input",
                    name: "managerOfficeNumber",
                    message: "Office number for team manager",
                }
            ]).then(answers => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNumber);
                team.push(manager);
                arrayOfIDs.push(answers.managerId);
                teamCreate();
            });
    }

    teamCreate = () => {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "memberChoice",
                    message: "What kind of team member do you want to add next?",
                    choices:
                        [
                            "Engineer",
                            "Intern",
                            "None"
                        ]
                }
            ]).then(userChoice => {
                switch (userChoice.memberChoice) {
                    case "Engineer":
                        createEngineer();
                        break;
                    case "Intern":
                        createIntern();
                        break;
                    default:
                        generateTeam();
                }
            });
    }

    createEngineer = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "Name of engineer?",
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "Engineer ID?",
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Email for engineer?",
                },
                {
                    type: "input",
                    name: "engineerGithub",
                    message: "Github for engineer?",
                }
            ]).then(answers => {
                const engineer = new Engineer(
                    answers.engineerName,
                    answers.engineerId,
                    answers.engineerEmail,
                    answers.engineerGithub);
                team.push(engineer);
                arrayOfIDs.push(answers.engineerId);
                teamCreate();
            });
    }

    createIntern = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "Name of intern?",
                },
                {
                    type: "input",
                    name: "internId",
                    message: "Intern ID?",
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "Email for intern?",
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "What school did your intern attend?",
                }
            ]).then(answers => {
                const intern = new Intern(
                    answers.internName,
                    answers.internId,
                    answers.internEmail,
                    answers.internSchool);
                team.push(intern);
                arrayOfIDs.push(answers.internId);
                teamCreate();
            });
    }

    generateTeam = () => {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(team), "utf-8");
    }
    setManager();

}

mainPage();
