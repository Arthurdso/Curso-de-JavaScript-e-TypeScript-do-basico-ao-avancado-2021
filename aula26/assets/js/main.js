function meuEscopo() {

const form = document.querySelector('#formulario');

function recebeEventosForm (e) {
    e.preventDefault();

    const formPeso = document.querySelector ('#peso');
    const formAltura = document.querySelector('#altura');

    const peso = Number(formPeso.value);

    const alturaConvertida = formAltura.value.replace(",",".");
    const altura = Number(alturaConvertida);
    
    const imc = IMC(peso, altura);
    const nivelImc = NivelIMC(imc);

    const msg = `IMC:${imc.toFixed(1)} - ${nivelImc}.`
    

    escreverMensagem(msg, true);

    if (!peso && !altura) return escreverMensagem("Peso e Altura invalidos", false) ;
    if(!peso || peso > 10000 || peso < 5) return escreverMensagem("Peso invalido", false);
    if (!altura || altura > 3.00 || altura < 0.90) return escreverMensagem("Altura invalida",false);
    

}

form.addEventListener('submit', recebeEventosForm)

}

function IMC(peso,altura) {
    return peso / (altura * altura)
}

function NivelIMC(imc) { 
    const grauImc = ['Abaixo do peso','Peso normal','Sobrepeso', 
    'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.0) return grauImc[5];
    if (imc >= 34.9) return grauImc[4];
    if (imc >= 29.9) return grauImc[3];
    if (imc >= 24.9) return grauImc[2];
    if (imc >= 18.5) return grauImc[1];
    if (imc < 18.5)  return grauImc[0];
}

function escreverMensagem(msg, éValido) {
    const resultado = document.querySelector('#resultado')
    
    if (éValido) {
        resultado.classList.remove('invalido');
        resultado.classList.add('valido');
    }else {
        resultado.classList.add('invalido')
    }
    
    resultado.innerHTML = msg;
}

meuEscopo();