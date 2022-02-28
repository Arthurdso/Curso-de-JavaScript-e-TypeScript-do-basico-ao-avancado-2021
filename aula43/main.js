// escreva uma funcao que recebe um numero e 
// retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Número NÂO é divisivel por 3 e 5 = Retorna o poroprio número
// checar se o numero é realmente um numero
// Use a função com números de 0 a 100

const fizzBuzz = (num) => {
    if (num % 3 == 0 && num % 5 == 0) return 'FizzBuzz'
    if (num % 3 == 0) return 'Fizz'
    if (num % 5 == 0) return 'Buzz'
    if (isNaN(num)) return 'Isso não é um numero'
    if (num % 3 != 0 && num % 5 != 0) return num
} 

for (let i = 0; i <= 100; i++) {
    console.log(i,fizzBuzz(i))
}
