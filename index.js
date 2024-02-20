//including packages needed// 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

//creating an array of questions for user input// 
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your project:",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe this project:",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Please provide the relative path to a screenshot of the application:",
    },
    {
        type: "input",
        name: "link",
        message: "Please provide a URL to the deployed app for users to access:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project:",
        choices: ["MIT", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "Please list any dependencies and languages here:",
    },
    {
        type: "input",
        name: "features",
        message: "Please list any cool features here:",
    },
    {
        type: "input",
        name: "usage",
        message: "Please tell users how to use this project:",
    },
    {
        type: "input",
        name: "creator",
        message: "What is your Github Username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "contributers",
        message: "Please list any contributers using their Github usernames:",
    },
    {
        type: "input",
        name: "test",
        message: "What tests should be run?",
    },
]

//initialising app 
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md file...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}
init();

//writing README.md file 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}