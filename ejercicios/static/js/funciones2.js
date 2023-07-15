function suma_2num(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var suma = num1 + num2;
    var msg = "El resultado es: "+suma;
    alert(msg);
    limpiar_campos();
}
function limpiar_campos(){
    var num1 = parseInt(document.getElementById('num1').value= " ");
    var num2 = parseInt(document.getElementById('num2').value= " ");
}