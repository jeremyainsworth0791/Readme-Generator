// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'projname',
        message: 'What is the name of your Project?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What, if any, licenses are you using?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description describing your project.'
    },
    
    {
        type: 'input',
        name: 'projurl',
        message: 'What is the Github URL for the application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write a short explanation of the intended use of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'List any packages required to use this application.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any other contributors to this application.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFile('README.md', data, (err)=> {
        if (err) throw err;
        console.log("The file has been saved!")
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=>  {
        console.log(answers)
        const text = generateMarkdown(answers);
        writeToFile("README.md", text);
    })
        // const text = generateMarkdown(answers)
        // writeToFile(filename, text)
}

// Function call to initialize app
init();
