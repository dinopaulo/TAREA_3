function validar_perfecto() {
  var numero = parseInt(document.getElementById('num').value);
  var acumulado = 0;
  var i = numero - 1;
  while(i > 0){
    var r = numero % i;
    if(r == 0){
        acumulado = acumulado + i;
    }
    i = i - 1;
  }
  if (numero == acumulado) {
    alert("El numero es perfecto");
  } else {
    alert("El numero no es perfecto");
  }
}
