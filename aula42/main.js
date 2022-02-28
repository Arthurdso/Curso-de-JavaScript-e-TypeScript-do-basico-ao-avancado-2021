// escreva uma funcao que chamada ePaisagem 
// que recebe dois argumentos, largura e altura
// de uma imagem(number).
// retorne true se a imagem estiver no modo 
// paisagem.

const ePaisagem = (altura, largura) => largura > altura;

console.log(ePaisagem(1000, 1000));