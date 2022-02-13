// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const gmd = require('./generateMarkdown.js');

const generateMD = ({title, description, installation, repo, usage, contributing, tests, credits, github_username, email, license, fullname}) =>
`# ${title}

![MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [Contact](#contact)
- [License](#license)

## Installation

${installation}
This application is deployed with GitHub Pages [here](https://${github_username}.github.io/${repo}).

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

## Credits

${credits}

## Contact

Any questions and feedback, please feel free to connect with me on [github](https://github.com/${github_username}) or email: ${email} =^.^=

## License

Copyright (c) 2022 ${fullname}.

Licensed under the ${license} license.`;

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
        name: 'repo',
        message: 'what is the name of your repo so we can link your deployment? please type the repo exactly, with any included dashes. (don\'t worry we\'ll be asking for your github username in just a few!)',
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
        name: 'credits',
        message: 'shoutout! give credits here:',
    },
    {
        type: 'input',
        name: 'github_username',
        message: 'what is your github username, so that users can connect with you?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what\'s your email address?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'please choose the license you\'d like to use:',
        choices: ['MIT', 'MEOW', 'HELLO', 'APACHE', 'MOZILLA'],
    },
    {
        type: 'input',
        name: 'fullname',
        message: 'please enter your full name as part of the license, spaces included, capitalization and all (if you\'d like).',
    },
  ])
  .then((answers) =>{
    // console.log();
    const markdown = generateMD(answers);
    fs.writeFile('copy.md', markdown, 'utf8', (err) =>
        err ? console.log(err) : console.log('success :)')
    );
  });

// JSON.stringify(answers, null, '\t')

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

// TITLE, DESCRIPTION, TABLE OF CONTENTS, INSTALLATION, USAGE, CONTRIBUTING, TESTS, QUESTIONS, LICENSE.

// list: license.     badge is added near top of README, and a notice is added to the License section that explains which license.

// input: github username. "what is your github username?" added to Questions section, with link to github.

// input: email. added to Questions section, with instructions on how to reach me with additional questions.
// WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README.