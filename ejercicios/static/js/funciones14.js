function promediar(){
    var cantidad_1 = parseFloat(document.getElementById('cant_1').value);
    var cantidad_2 = parseFloat(document.getElementById('cant_2').value);
    var cantidad_3 = parseFloat(document.getElementById('cant_3').value);
    var promedio = (cantidad_1 + cantidad_2 + cantidad_3) / 3;
    alert("El promedio es de: "+promedio);
}