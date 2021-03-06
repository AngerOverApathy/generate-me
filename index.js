// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMD')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the repository name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Are there any special features?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions for installation',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project?',
        choices: ["MIT", "ISC", "GNU GPLv3"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

const writeToFile = pageMD => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./dist/README.md', pageMD, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Created Readme'
            })
        })
    })
}

function init() {
   return  inquirer.prompt(questions)
    .then(data => {
        //Pass in Template
        console.log(data)
       return  generateMD(data)
    })
    .then(pageMD => {
        return writeToFile(pageMD)
    })
}

init();