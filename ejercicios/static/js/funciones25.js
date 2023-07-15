function sumarOmultiplicar() {
    var numeroA = parseInt(document.getElementById('numA').value);
    var numeroB = parseInt(document.getElementById('numB').value);
  if (numeroA < 0 || numeroB < 0) {
    var resultado = numeroA + numeroB;
    swal({
        title: "Suma",
        text: numeroA +" + "+numeroB+ " = "+ resultado
      });
      numeroA = parseInt(document.getElementById('numA').value="");
      numeroB = parseInt(document.getElementById('numB').value="");
  } else {
    resultado= numeroA * numeroB;
    swal({
        title: "Multiplicacion",
        text: numeroA +" x "+numeroB+ " = "+ resultado
      });
      numeroA = parseInt(document.getElementById('numA').value="");
      numeroB = parseInt(document.getElementById('numB').value="");
  }
}
