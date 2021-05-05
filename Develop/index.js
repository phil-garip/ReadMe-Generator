// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { renderReadMe } = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'Please enter a Title for your project.',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for this project.',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Please enter any usage information.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please specify any contribution guidelines.',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please enter any test intructions.',
        name: 'test'
    },
    {
        type: 'checkbox',
        messgae: 'Which license would you like to attach?',
        name: 'license',
        choices: [
            'MIT',
            'Mozilla',
            'Apache 2.0',
            'Artistic License 2.0'
        ]
    },
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'github'
    },
    {
        type: 'input',
        messgae: 'What is your email?',
        name: 'email'
    }]

inquirer
    .prompt(questions)
    .then ((answers) => {
        renderReadMe(answers);
    })

// TODO: Create a function to write README file


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();