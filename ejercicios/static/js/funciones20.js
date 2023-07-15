function rol_pagos(){
    var nombre= document.getElementById('nom').value;
    var horas_lab = parseInt(document.getElementById('h_l').value);
    var horas_ext = parseInt(document.getElementById('h_e').value);
    var valorxhora = 4.00;
    var valorh_e= (horas_ext * valorxhora) * 2;
    var rol = horas_lab * valorxhora;
    var total = rol + valorh_e;
    alert("El Sr/a: "+nombre);
    alert("Se le debe pagar un total de: " + total+ "$");
}