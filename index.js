// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// Internal modules
const getUser = require('./utils/getUser.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
    },

    {
        type: 'input',
        message: "Please provide your e-mail",
        name: 'email',
    },

];

// function to write README file

const writeFileAsync = util.promisify(writeToFile);


function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function(err) {

    if (err) {
      return console.log(err);
    }
  
    console.log("Readme file is created successfully!");
  
  });
}




// function to initialize program
async function init() {
    try {
        //prompt inquirer questions
        const userResponse = await inquirer.prompt(questions);
        console.log("Your responses: ",userResponse);
        
        //fetch and wait for user info from GitHub
        // const userInfo = await getUser(userResponse);
        // console.log("Your GitHub user info: ",userInfo);
        
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        const markDown = generateMarkdown(userResponse)//, //userInfo);
        console.log(markDown);
    
        // write markdown to file
        await writeFileAsync("README.md", markDown);
    
        console.log("Successfully wrote to README.md");

    } catch(err) {
        console.log(err);
    }

};


// function call to initialize program
init();
