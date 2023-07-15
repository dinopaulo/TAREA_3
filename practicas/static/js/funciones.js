function calcular(){
    var valor_hora = parseFloat(document.getElementById('_valor_hora').value);
    var numero_hora = parseFloat(document.getElementById('_numero_hora').value);
    var total = valor_hora * numero_hora;
    alert("El total a pagar es: "+total+" dolares");
}