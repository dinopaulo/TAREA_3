function calcular_lya(){
    var rad = parseFloat(document.getElementById('rad_cir').value);
    var long = 2 * Math.PI * rad;
    var area = Math.PI * Math.pow(rad, 2);
    alert("La longitud de la circunferencia es: " + long.toFixed(2));
    alert("El área del círculo inscrito es: " + area.toFixed(2));
}