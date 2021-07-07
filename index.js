const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const fs = require("fs");
const arrayOfIDs = [];
const generate = require("./src/generate.js");
const team = [];


mainPage = () => {
    // Use inquirer to prompt user with manager questions
    setManager = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "nameOfManager",
                    message: "Enter name of team manager",
                },
                {
                    type: "input",
                    name: "idForManager",
                    message: "What's the managers id?",
                },
                {
                    type: "input",
                    name: "emailForManager",
                    message: "Email for team manager?",
                },
                {
                    type: "input",
                    name: "offNumManager",
                    message: "Office number for team manager",
                }
            ]).then(answers => {
                const manager = new Manager(
                    answers.nameOfManager,
                    answers.idForManager,
                    answers.emailForManager,
                    answers.offNumManager);
                team.push(manager);
                arrayOfIDs.push(answers.idForManager);
                teamCreate();
            });
    }
    // Use inquirer to prompt user with intern questions
    createIntern = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "nameOfIntern",
                    message: "Name of intern?",
                },
                {
                    type: "input",
                    name: "idForIntern",
                    message: "Intern ID?",
                },
                {
                    type: "input",
                    name: "emailForIntern",
                    message: "Email for intern?",
                },
                {
                    type: "input",
                    name: "schoolOfIntern",
                    message: "What school did your intern attend?",
                }
            ]).then(answers => {
                const intern = new Intern(
                    answers.nameOfIntern,
                    answers.idForIntern,
                    answers.emailForIntern,
                    answers.schoolOfIntern);
                team.push(intern);
                arrayOfIDs.push(answers.idForIntern);
                teamCreate();
            });
    }

    // Use inquirer to promp user with engineer questions
    createEngineer = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "nameOfEng",
                    message: "Name of engineer?",
                },
                {
                    type: "input",
                    name: "idForEng",
                    message: "Engineer ID?",
                },
                {
                    type: "input",
                    name: "emailForEng",
                    message: "Email for engineer?",
                },
                {
                    type: "input",
                    name: "engGH",
                    message: "Github for engineer?",
                }
            ]).then(answers => {
                const engineer = new Engineer(
                    answers.nameOfEng,
                    answers.idForEng,
                    answers.emailForEng,
                    answers.engGH);
                team.push(engineer);
                arrayOfIDs.push(answers.idForEng);
                teamCreate();
            });
    }

    // Use inquirer to ask which user what kind of member they want to add next if they want to
    teamCreate = () => {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "addNewMem",
                    message: "What kind of team member do you want to add next?",
                    choices:
                        [
                            "Engineer",
                            "Intern",
                            "None"
                        ]
                }
            ]).then(userChoice => {
                switch (userChoice.addNewMem) {
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
    generateTeam = () => {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, generate(team), "utf-8");
    }
    setManager();

}

mainPage();
