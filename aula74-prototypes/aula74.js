// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// definindo Prototype
Pessoa.prototype.nomeCompleto = function () {
        return this.nome + ' ' + this.sobrenome;
    }
    
// instância 
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função Construtora

console.dir(pessoa1.nomeCompleto());
console.dir(pessoa2);

