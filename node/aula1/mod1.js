class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
};

const nome = 'Arthur';
const sobrenome = 'Oliveira';

module.exports = {
    nome, sobrenome, Pessoa
};

module.exports.outracoisa = 'Outra Coisa'

// module.exports.nome = 'Arthur'
// exports.Pessoa = Pessoa;
// this.sobrenome = 'Qualquer coisa que eu quiser.'




// const nome ='Arhur';
// const sobrenome =' Oliveira'

// const falaNome = () => nome + '' + sobrenome;


// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

// console.log(module.exports);
