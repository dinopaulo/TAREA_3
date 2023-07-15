function validar_primo(){
    var primo = true;
    var divisor = 2;
    var numero = parseInt(document.getElementById('num').value);
    while(divisor < numero){
        if(numero % divisor == 0){
            primo = false;
        }
        divisor= divisor + 1;
        if (primo) {
            alert(numero+ " Es primo")
        }else{
            alert(numero + " No es primo.")
        }
    }
}