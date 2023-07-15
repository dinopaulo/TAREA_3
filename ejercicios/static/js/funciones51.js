function imprimirPrimos() {
    var numberInput = document.getElementById('numeroInput');
    var primosLista = document.getElementById('primosList');
    var n = parseInt(numberInput.value);
    
    primosLista.innerHTML = '';
  
    for (var i = 2; i <= n; i++) {
      if (esPrimo(i)) {
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.textContent = i;
        li.appendChild(span);
        primosLista.appendChild(li);
      }
    }
  }
  
  function esPrimo(num) {
    for (var i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  