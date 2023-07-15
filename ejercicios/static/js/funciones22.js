function encontrarCociente() {
  var A = parseFloat(document.getElementById('nume_a').value);
  var B = parseFloat(document.getElementById('nume_b').value);
    if (B === 0) {
      alert("La división no es posible");
    } else {
      var resultado = A / B;
      alert("El resultado es: "+resultado);
    }
  }
  