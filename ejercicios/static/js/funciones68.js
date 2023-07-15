let suma = 0;

function sumarNumero() {
  const inputElement = document.getElementById('inputNumber');
  const numero = parseInt(inputElement.value);

  if (numero !== 0) {
    suma += numero;
    inputElement.value = '';
  }

  document.getElementById('resultado').innerText = `Resultado: ${suma}`;
}
