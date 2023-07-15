function calcular_area_tria(){
    var base = parseFloat(document.getElementById('base-tria').value);
    var altura = parseFloat(document.getElementById('alt-tria').value);
    var area = (base * altura)/2;
    var msg = "El area de su triangulo es: "+area+" metro cuadrado";
    alert(msg);
}