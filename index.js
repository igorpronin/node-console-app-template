const argv = require('minimist')(process.argv.slice(2));
const {showHelp, checkArgs} = require('./functions');
// const constants = require('./constants');
// const chalk = require('chalk');

const argsList = [
  {
    arg: 'h',
    description: 'Help'
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


