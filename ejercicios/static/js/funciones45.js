window.addEventListener('DOMContentLoaded', function() {
    var resultadoElement = document.getElementById('result');
    var sum = 0;
  
    for (var i = 1; i <= 100; i++) {
      sum += i * i;
    }
  
    resultadoElement.textContent = 'La suma de los cuadrados de los 100 primeros números naturales es: ' + sum;
  });
  