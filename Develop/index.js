// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// Internal modules
getUserResponse = require('./utils/api.js');
generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'nuchana',
        validate: function (answer) {
            if (answer.lenght < 1) {
                return console.log("A valid GitHub username is required.")
            }
            return true;
        }

    },

    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'readme generator',
        validate: function (answer) {
            if (answer.lenght < 1) {
                return console.log("A valid GitHub repo is required.")
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.lenght < 1) {
                return console.log("A valid project title is required.")
            }
            return true;
        }

    },

    {
        type: 'input',
        message: "Write a description of your project",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.lenght < 1) {
                return console.log("A valid project description is required.")
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }

];

// function to write README file

const writeFileAsync = util.promisify(writeToFile);


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Readme file is created successfully!");

    });
}




// function to initialize program
function init() {

}

// function call to initialize program
init();
