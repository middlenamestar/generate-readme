// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'write up a description about your project!',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'explain any installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'describe how to use your application:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'how can others contribute to your application?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'write some steps on how to test your application:',
    },
    {
        type: 'input',
        name: 'github_username',
        message: 'what is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what\'s your email address?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'please choose the license you want to use:',
        choices: ['mit', 'meow', 'hiii'],
    },
  ])
  .then((answers) =>{
    //   console.log(answers);
    fs.writeFile('README.md', JSON.stringify(answers, null, '\t'), 'utf8', (err) =>
        err ? console.log(err) : console.log('success :)')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TITLE, DESCRIPTION, TABLE OF CONTENTS, INSTALLATION, USAGE, CONTRIBUTING, TESTS, QUESTIONS, LICENSE.

// list: license.💗     badge is added near top of README, and a notice is added to the License section that explains which license.

// input: github username. "what is your github username?"💗 added to Questions section, with link to github.

// input: email.💗 added to Questions section, with instructions on how to reach me with additional questions.
// WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README.