function calcular_area_rect(){
    var altura = parseFloat(document.getElementById('alt_rect').value);
    var ancho = parseFloat(document.getElementById('ancho_rect').value);
    var area = altura * ancho;
    var msg = "El area del rectangulo es: "+ area;
    alert(msg);
}