function validad_num_mayor(){
    var numero_uno= parseFloat(document.getElementById('numero_uno').value);
    var numero_dos= parseFloat(document.getElementById('numero_dos').value);
    if(numero_uno > numero_dos){
        alert("El numero mayor es: "+numero_uno);
    }else{
        alert("El numero mayor es: "+numero_dos);
    }
}