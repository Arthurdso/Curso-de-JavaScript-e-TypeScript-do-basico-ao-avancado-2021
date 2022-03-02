const path = require('path');
const axios = require('axios');
const { Pessoa } = require ('./mod1');

const p1 = new Pessoa('Art');
console.log(p1);

// axios('https://otaviomiranda.com.br/files/json/pessoas.json')
// .then(response => console.log(response.data))
// .catch(e => console.log(e));



// const {nome, sobrenome, falaNome } = require('./mod1');
// console.log(nome, sobrenome);
// console.log(falaNome());