function calcularCuadrilatero() {
    var base = parseInt(document.getElementById('base').value);
    var altura = parseInt(document.getElementById('altura').value);
    if (base === altura) {
      var perimetro = 4 * base;
      var area = base * altura;
      swal({
        title: "Es un cuadrado ■",
        text: "Perímetro: " + perimetro + ", Área: " + area,
        icon: "success"
      })
      clear();
    } else {
      var perimetro = 2 * (base + altura);
      var area = base * altura;
      swal({
        title: "Es un rectángulo █",
        text: "Perímetro: " + perimetro + ", Área: " + area,
        icon: "success"
      })
      clear();
    }
  }
  function clear(){
    base = parseInt(document.getElementById('base').value="");
    altura = parseInt(document.getElementById('altura').value="");
  }