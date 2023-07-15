function calcular_ayv(){
    var radio = parseFloat(document.getElementById('rad_cil').value);
    var altura = parseFloat(document.getElementById('alt_cil').value);
    var areaBase = Math.PI * Math.pow(radio, 2);
    var areaLateral = 2 * Math.PI * radio * altura;
    var areaTotal = 2 * areaBase + areaLateral;
    var volumen = areaBase * altura;
    alert("El área del cilindro es: " + areaTotal.toFixed(2));
    alert("El volumen del cilindro es: " + volumen.toFixed(2));
}