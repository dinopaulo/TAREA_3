function validar_mult_7(){
    var numero = parseInt(document.getElementById('num').value);
    if(numero % 2 !=0 && numero % 7 == 0){
        alert("El número: "+ numero + " es impar y múltiplo de 7.");
    }else{
        alert("El número ingresado no es impar y múltiplo de 7.");
    }
}