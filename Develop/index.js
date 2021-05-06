// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { renderReadMe } = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the name of your porject?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a short description for your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does a user need to know about contributing to the repo?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test'
    },
    {
        type: 'list',
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