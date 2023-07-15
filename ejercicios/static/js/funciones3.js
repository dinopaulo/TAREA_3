function elevar_al2(){
    var num = parseFloat(document.getElementById('num').value);
    if (isNaN(num)) {
        alert("No has ingresado un número válido");
    } else {
        var resultado = num * num;
        alert("El número elevado al cuadrado es: " + resultado);
    }
    limpiar_campos();
}
function limpiar_campos(){
    var num = parseInt(document.getElementById('num').value= " ");
}