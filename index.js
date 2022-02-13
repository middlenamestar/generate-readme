const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = ({title, description, installation, repo, alt, img_filepath, usage, contributing, tests, credits, github_username, email, license, fullname}) =>
`# ${title}

![MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [Feedback](#feedback)
- [License](#license)

## Installation

${installation}

You can find the application deployed through GitHub Pages, [here!](https://${github_username}.github.io/${repo})

## Usage

![${alt}](assets/images/${img_filepath})

${usage}

## Contributing

${contributing}

## Tests

${tests}

## Credits

${credits}

## Feedback

Any questions, feedback, or issues, please feel free to connect with me on [github](https://github.com/${github_username}) or by email: ${email} =^.^=

## License

Copyright (c) 2022 ${fullname}

Licensed under the ${license} license.`;

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
        message: 'tell me a little about your project! describe it :D',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'explain any installation instructions!:',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'what is the name of your repo so we can link your deployment? please type the repo exactly, with any included dashes. (don\'t worry we\'ll be asking for your github username in just a few!)',
    },
    {
        type: 'input',
        name: 'alt',
        message: 'include at least one image of your application! trust me. let\'s start with the alt text. write the alt text about your image here: in the next question, we\'ll ask for the file path.',
    },
    {
        type: 'input',
        name: 'img_filepath',
        message: 'create an assets/images folder and upload your screenshot/image to the folder and name the image. type the name of the image here including any .png, and we\'ll pop it into the url, no worries.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'now describe a little on how to use your application:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'how can others contribute to your application? write up some guidelines:',
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
        message: 'what is your github username, so that users can connect with you if they have any questions?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'email address?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'please choose the license you\'d like to use:',
        choices: ['MIT'],
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
    fs.writeFile('README.md', markdown, 'utf8', (err) =>
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