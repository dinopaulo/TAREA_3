function calculate() {
    var dividend = parseInt(document.getElementById("dividend").value);
    var divisor = parseInt(document.getElementById("divisor").value);
  
    if (divisor !== 0) {
      var quotient = Math.floor(dividend / divisor);
      var remainder = dividend % divisor;
      var result = "Cociente: " + quotient + "<br>Resto: " + remainder;
      document.getElementById("result").innerHTML = result;
    } else {
      document.getElementById("result").innerHTML = "Error: el divisor no puede ser cero.";
    }
  }
  