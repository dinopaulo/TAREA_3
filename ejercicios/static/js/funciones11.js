function calcular_ayp(){
    var lado_square = parseFloat(document.getElementById('lado_cua').value);
    var area = lado_square * lado_square;
    var perimetro = 4 * lado_square;
    alert("El area de tu cuadrado es de: " + area);
    alert("El perimetro de tu cuadrado es de: " +perimetro);
}