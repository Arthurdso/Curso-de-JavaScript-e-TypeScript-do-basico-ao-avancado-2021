// Filter -> sempre vai retornar um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10

const numero = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27, 30, 100, 9, 11];

const numeros = numero.filter(value => value > 10);

console.log(numeros);

// retorne as pessoas cujo nome tem 5 ou mais letras
// retorne as pessoas cujo a idade é maior que 50
// retorne as pessoas cuja ultima letra do nome é A

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >=6);
// const pessoasComIdadeCinquenta = pessoas.filter(id => id.idade > 50);
const nomeTerminaComA = pessoas.filter(letra => letra.nome.endsWith('a'));

console.log(pessoasComNomeGrande);
// console.log(pessoasComIdadeCinquenta);
console.log (nomeTerminaComA);