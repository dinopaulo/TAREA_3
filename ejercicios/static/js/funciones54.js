function contarNumeros() {
    var cant = parseInt(document.getElementById('cantidad').value);
    var positivos = 0;
    var negativos = 0;
    var ceros = 0;

    for (var i = 0; i < cant; i++) {
      var numero = parseFloat(prompt("Ingrese el número " + (i + 1)));

      if (numero > 0) {
        positivos++;
      } else if (numero < 0) {
        negativos++;
      } else {
        ceros++;
      }
    }

    var result = document.getElementById('resultado');
    result.innerHTML = "<p>Números positivos: " + positivos + "</p>" +
                       "<p>Números negativos: " + negativos + "</p>" +
                       "<p>Ceros: " + ceros + "</p>";
  }