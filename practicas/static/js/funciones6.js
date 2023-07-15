function validar_concierto(){
    var cedula = parseInt(document.getElementById('c_i').value);
    var nombre_per = document.getElementById('nom_ape').value;
    var edad = parseInt(document.getElementById('age').value);
    var boleto = "si";
    if(edad > 18 && boleto == "si"){
        alert("El Sr/a: "+nombre_per+" , tiene permitido el ingreso al concierto.");
    }else{
        alert("El Sr/a: "+nombre_per+" ,no tiene permitido el ingreso al concierto.");
    }
}