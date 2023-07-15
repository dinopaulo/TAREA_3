function sumarNumeros() {
    var inputNumber = document.getElementById('inputNumber').value;
    var resultado = 0;
  
    for (var i = parseInt(inputNumber) + 1; i <= parseInt(inputNumber) + 100; i++) {
      resultado += i;
    }
  
    document.getElementById('resultado').innerText = 'La suma de los 100 números siguientes es: ' + resultado;
  }
  