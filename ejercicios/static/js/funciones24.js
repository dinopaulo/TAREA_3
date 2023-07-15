
function validacion() {
  var ladoA = parseFloat(document.getElementById("lado_1").value);
  var ladoB = parseFloat(document.getElementById("lado_2").value);
  var ladoC = parseFloat(document.getElementById("lado_3").value);
  if (ladoA === ladoB && ladoB === ladoC) {
    swal({
        title: "Triangulo Equilatero",
        text: "Tu triangulo si es equilatero",
        icon: "success",
      });
      clean();
  } else {
    swal({
        title: "Triangulo Equilatero",
        text: "Tu triangulo no es equilatero",
        icon: "error",
      });
      clean();
  }
}
function clean(){
    ladoA = parseFloat(document.getElementById("lado_1").value="");
      ladoB = parseFloat(document.getElementById("lado_2").value="");
      ladoC = parseFloat(document.getElementById("lado_3").value="");
}

