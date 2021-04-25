const chalk = require('chalk');
const constants = require('./constants');

const showHelp = (argsList) => {
  console.log(chalk.bgGreen.black( ` ${constants.appTitle} \n`));
  console.log('Available arguments:');
  argsList.map(item => {
    console.log(`   -${item.arg}   ${item.description}`);
  });
}

const checkArgs = (args, argsList) => {
  if (!!args._.length) {
    throw new Error(`Non-existent argument passed: "${args._[0]}"`);
  }
  for (let key in args) {
    if (!args.hasOwnProperty(key)) continue;
    const hasArg = argsList.some((item) => item.arg === key);
    if (key !== '_' && !hasArg) throw new Error(`Non-existent argument passed: "${key}"`);
  }
}

module.exports = {
  showHelp,
  checkArgs
}
