function validar_impar_par(){
    var numero = parseInt(document.getElementById('num').value);
    var validacion = numero % 2;
    if(numero > 0){
        if(validacion == 0){
            alert("El numero "+numero+" es par");
        }else{
            alert("El numero "+numero+" es impar")
        }

    }else{
        alert("El numero "+numero+" no es mayor a 0");
    }
}