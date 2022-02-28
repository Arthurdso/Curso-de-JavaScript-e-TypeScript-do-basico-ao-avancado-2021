// dobre os numeros

// const numero = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27, 30, 100, 9, 11];

// const numerosEmDobro = numero.map(valor => valor * 2);

// console.log(numerosEmDobro);

//para cada elemento :
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chava id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome)

const removeNome = pessoas.map(obj => ({idade: obj.idade}));

const comIds = pessoas.map((obj, ind) => {
    obj.id = (ind + 1) * 10;
    obj.Nascimento = `(${(Math.random() *31).toFixed(0)}/${(Math.random() *12).toFixed(0)}/19${(Math.random() * 52).toFixed(0)})`
    return obj;
});


console.log(pessoas );
