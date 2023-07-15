function validar(){
    var numero1 = parseInt(document.getElementById('nume_1').value);
    var numero2 = parseInt(document.getElementById('nume_2').value);
    var numero3 = parseInt(document.getElementById('nume_3').value);
    if(numero1 > 0 && numero2 > 0 && numero3 > 0){
        //se llama a la funcion y se asigna las variables requeridas para hacer uso del metodo.
        getMenMay(numero1, numero2, numero3);
    }else{
        alert("Debes ingresar solo enteros positivos");
    }
}
//Funcion que permite obtener el numero mayor y menor de 3.
function getMenMay(num1, num2, num3) {
    // Obtener el menor número
    var menor = Math.min(num1, num2, num3);
  
    // Obtener el mayor número
    var mayor = Math.max(num1, num2, num3);
    alert("El número menor es: " + menor);
    alert("El número mayor es: " + mayor);
}