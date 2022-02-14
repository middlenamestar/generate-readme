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
        message: 'awesome! now, tell me a little about your project. describe it up!',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'any installation instructions?',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'what is the name of your repository, so that we can link to your deployment page? pls type the repo name exactly, with any included dashes. (don\'t worry, we\'ll be asking for your github username in just a few!)',
    },
    {
        type: 'input',
        name: 'alt',
        message: 'include at least one image of your application!!! trust me. let\'s start with the alt text. write the alt about your image here. in the next question, we\'ll ask for the file path.',
    },
    {
        type: 'input',
        name: 'img_filepath',
        message: 'create an assets/images folder if you haven\'t already and upload your image to the folder. name the image and provide the name here. include the .png, .jpeg, etc. we\'ll pop it into the file path, voila.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'now, describe a little about how to use your application. what are some usage features?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'how can others contribute to your application? write up some guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'what would tests for your application look like?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'shoutout! give some credits here.',
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
        message: 'lastly, please enter your full name as part of the license! bye, this was fun!',
    },
  ])
  .then((answers) =>{
    // console.log();
    const markdown = generateMD(answers);
    fs.writeFile('README.md', markdown, 'utf8', (err) =>
        err ? console.log(err) : console.log('success :)')
    );
  });