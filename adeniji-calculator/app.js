import { numAdd,numSubtract,numDivide,numMultiply } from "./my_module/calculator.js";
import chalk from "chalk";
const fileDir=import.meta.url

console.log(chalk.blue(numAdd(5,8)))
console.log(chalk.bgGreen(numSubtract(50,20)))
console.log(chalk.cyanBright(numDivide(8,4)))
console.log(chalk.bgYellow(numMultiply(10,5)))

console.log(chalk.bgRed(fileDir))


