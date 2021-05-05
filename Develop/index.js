// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = []
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What was your motivation for this project?',
            name: 'motivation'
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'why'
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'problem'
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'learn'
        },
        {
            type: 'input',
            message: 'What makes your project stand out?',
            name: 'standout'
        }
    ])
    .then ((answers) => {
    const readMe = renderReadMe(answers);

    fs.writeFile("README.md", readMe, "utf8", (err) => {
        if (err) console.log(err);
        console.log("We wrote the file.")
        
        })
    },

// TODO: Create a function to write README file
function renderReadMe ({ motivation, why, problem, learn, standout }) {
    return
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();