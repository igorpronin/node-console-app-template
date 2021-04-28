const argv = require('minimist')(process.argv.slice(2));
const {showHelp, checkArgs} = require('./functions');
const inquirer = require('inquirer');
// const constants = require('./constants');
// const chalk = require('chalk');

const argsList = [
  {
    arg: 'h',
    description: 'Help'
  },
  {
    arg: 'm',
    description: 'Example menu'
  },
  {
    arg: 'r',
    description: 'One more example argument'
  }
]

checkArgs(argv, argsList);

if ('h' in argv) {
  showHelp(argsList);
}

if ('m' in argv) {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'size',
        message: 'Choose something',
        choices: ['Want this', 'Want that', 'Want nothing'],
        filter: (val) => {
          return val.toLowerCase();
        }
      }
    ])
    .then(answers => {
      console.log(answers);
    })
    .catch(error => {
      if (error.isTtyError) {
        throw new Error('Prompt couldn\'t be rendered in the current environment');
      } else {
        throw error;
      }
    });
}
