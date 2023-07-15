document.addEventListener("DOMContentLoaded", function() {
    var factorialTabla = document.getElementById("factorial-tabla");
  
    for (var i = 1; i <= 10; i++) {
      var fila = document.createElement("tr");
      var numeroCelda = document.createElement("td");
      var factorialCelda = document.createElement("td");
  
      numeroCelda.textContent = i;
      factorialCelda.textContent = calcularFactorial(i);
  
      fila.appendChild(numeroCelda);
      fila.appendChild(factorialCelda);
  
      factorialTabla.appendChild(fila);
    }
  });
  
  function calcularFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calcularFactorial(n - 1);
    }
  }
  