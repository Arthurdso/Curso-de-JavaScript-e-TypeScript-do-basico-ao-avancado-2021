/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Arthur';
const sobreNome = 'Oliveira';
const idade = 25;
const peso = 75;
const altura = 1.75;

let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobreNome} tem ${idade}, pesa ${peso}kg 
tem ${altura} e seu IMC é de ${imc} 
${nome} nasceu em ${anoNascimento}`);