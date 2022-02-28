const falar = {
    falar(texto) {
        texto = texto
        if (texto === undefined) texto = "abobrinha"
        
        console.log(`${this.nome} está falando ${texto}`)
    }
}  

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
} 

const pessoaPrototype = Object.assign({}, falar, comer, beber)


function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Arthur', 'Oliveira')
p1.falar('Olá Mundo')
p1.comer()
p1.beber()

console.log()
const p2 = criaPessoa('Ronaldo', 'Francisco')
p2.falar();
p2.beber()
p2.comer()