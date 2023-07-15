function calcular_nyr(){
    var base = parseFloat(document.getElementById('nume_r').value);
    var exponente = parseFloat(document.getElementById('nume_n').value);
    var resultado = Math.pow(base, exponente);
    alert(base + " elevado a la potencia " + exponente + " es igual a: " + resultado);
}