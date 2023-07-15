function calcularFactorial() {
    var number = document.getElementById('numeroInput').value;
  
    if (number < 0) {
      document.getElementById('resultado').innerHTML = "El número debe ser mayor o igual a cero.";
      return;
    }
  
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
      factorial *= i;
    }
  
    document.getElementById('resultado').innerHTML = "El factorial de " + number + " es: " + factorial;
  }
  