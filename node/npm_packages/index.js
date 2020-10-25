const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.blue.underline.bold("masteroot"));

const res = validator.isEmail("dsaiaditya@gmail.com")
console.log(res ? chalk.greenBright.inverse(res) : chalk.redBright.inverse(res));