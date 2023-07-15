let numeros = [];
let promedioElement = document.getElementById('promedio');

function calcularPromedio() {
  let inputNumber = document.getElementById('inputNumber');
  let numero = parseFloat(inputNumber.value);
  
  if (numero >= 0) {
    numeros.push(numero);
    let suma = numeros.reduce((a, b) => a + b, 0);
    let promedio = suma / numeros.length;
    promedioElement.textContent = `Promedio: ${promedio.toFixed(2)}`;
  } else {
    promedioElement.textContent = 'Fin del conjunto de valores';
  }
  
  inputNumber.value = '';
}
