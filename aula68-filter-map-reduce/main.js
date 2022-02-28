// Retorne a soma do dobro de todos os pares
// - Filtrar Pares
// - Dobrar os valores
// - Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27, 30, 100, 9, 11];

// const numerosPares = numeros.filter(valor => valor % 2 === 0);

// console.log(numerosPares);

// const dobraValores = numerosPares.map(valor => valor * 2);
// console.log(dobraValores);

// const somaTudo = dobraValores.reduce(function (acumulador, valor) {
    
//     return acumulador += valor;
// })

// console.log(somaTudo);

const dobro = numeros
.filter(valor => valor % 2 == 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac += valor);

console.log(dobro)
