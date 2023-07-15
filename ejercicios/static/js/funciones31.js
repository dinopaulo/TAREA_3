function checkAnioBisiesto() {
    var yearInput = document.getElementById('yearInput');
    var year = parseInt(yearInput.value);
  
    if (isNaN(year)) {
      document.getElementById('result').textContent = 'Ingresa un año válido.';
      return;
    }
  
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      document.getElementById('result').textContent = year + ' es un año bisiesto.';
    } else {
      document.getElementById('result').textContent = year + ' no es un año bisiesto.';
    }
  }
  