function verificar() {
  var numero1 = parseInt(document.getElementById("nume_1").value);
  var numero2 = parseInt(document.getElementById("nume_2").value);
  if (numero1 > numero2) {
    alert("El numero: " + numero1 + " es mayor que el numero: " + numero2);
  } else {
    if (numero2 > numero1) {
      alert("El numero: " + numero2 + " es mayor que el numero: " + numero1);
    } else {
      if ((numero1 = numero2)) {
        alert("Los numeros ingresados son iguales.");
      }
    }
  }
}
