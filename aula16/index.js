const altura = 1.75;
const peso = 25;

calculaImc = (peso,altura) => {
    const imc = peso / (altura * altura);

    console.log(imc);
    
};

calculaImc(75,1.75);

