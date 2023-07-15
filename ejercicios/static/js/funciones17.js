function calc_num_neg_pos(){
    var numero = parseInt(document.getElementById('num').value);
    if(numero > 0){
        alert("El numero ingresado es positivo");
    }else{
        if(numero < 0){
            alert("El numero ingresado es negativo");
        }else{
            alert("El numero ingresado es 0");
        }
    }
}