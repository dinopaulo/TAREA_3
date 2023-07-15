function validar_mayor_10(){
    var num_uno = parseFloat(document.getElementById('primer_num').value);
    var num_dos = parseFloat(document.getElementById('segundo_num').value);
    var suma = num_uno + num_dos;
    if(suma > 10){
        alert("El numero " +suma+ " es mayor a 10");
    }else{
        alert("El numero "+suma+ " es menor a 10");
    }
}