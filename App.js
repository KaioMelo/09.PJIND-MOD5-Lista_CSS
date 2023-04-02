import readlineSync from "readline-sync";
import chalk from "chalk";

const propriedade = [];
let input = "";

console.log("Digite uma lista de propriedades em CSS!")
console.log("Digite sair para encerrar!")

do{
  propriedade.push(input);
  input = readlineSync
    .question("Propriedades em CSS: ")
    .toLocaleLowerCase();
}while(input != "sair") 

console.log(chalk.green.underline(propriedade.sort().join("\n")));