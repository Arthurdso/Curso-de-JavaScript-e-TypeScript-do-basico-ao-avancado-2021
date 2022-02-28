const numero0 = prompt('Digite um numero').replace(',', '.');
numero = Number(numero0);
const numeroTitulo = document.getElementById('numero-titulo');

numeroTitulo.innerHTML = numero;
const texto = document.getElementById('texto');


texto.innerHTML = `<h1>Raiz quadrada: ${Math.sqrt(numero)}</h1><br>
<h1>${numero} é inteiro: ${Number.isInteger(numero)}</h1> 
<h1>é NaN: ${isNaN(numero)}</h1><br> 
<h1>Arredondado para baixo: ${Math.floor(numero)}</h1><br>
<h1>Arredondado pra cima: ${Math.ceil(numero)}</h1><br>
<h1>Com duas casas decimais: ${numero.toFixed(2)}</h1>`