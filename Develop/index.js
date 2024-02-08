// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const { generateMarkdown } = require("./utils/generateMarkdown.js"); 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "Input your project name:",
    },
    {
        type: "input",
        name: "description",
        message: "Input your description:",
    },
    {
        type: "input",
        name: "installation",
        message: "Input your installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Input your usage information:",
    },
    {
        type: "input",
        name: "constribution",
        message: "Input your constribution guidelines:",
    },
    {
        type: "input",
        name: "test",
        message: "Input your test instructions:",
    },
    {
        type: "list",
        name: "license",
        choices: [
            "Apache-2.0",
            "GPL-2.0",
            "GPL-3.0",
            "ISC",
            "MIT",
            "None"
        ],
    },
    {
        type: "input",
        name: "username",
        message: "Input your github username:",
    },
    {
        type: "input",
        name: "email",
        message: "Input your email address:",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(`./output/${fileName}`, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt((questions))
            .then((responses) => {
             const readme = generateMarkdown(responses);
             
             writeToFile('README.md', readme);
            })
}

// Function call to initialize app
init();