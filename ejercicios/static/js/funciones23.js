function diasSem(){
    var numDia = parseInt(document.getElementById('nume').value);
    var nombreDia;
switch (numDia) {
  case 1:
    nombreDia = "Lunes";
    swal({title:'Dia de la semana', text:nombreDia, icon:'success'});
    break;
  case 2:
    nombreDia = "Martes";
    swal({title:'Dia de la semana', text:nombreDia, icon:'success'});
    break;
  case 3:
    nombreDia = "Miércoles";
    swal({title:'Dia de la semana', text:nombreDia, icon:'success'});
    break;
  case 4:
    nombreDia = "Jueves";
    swal({title:'Dia de la semana', text:nombreDia, icon:'success'});
    break;
  case 5:
    nombreDia = "Viernes";
    swal({title:'Dia de la semana', text:nombreDia, icon:'success'});
    break;
  case 6:
    nombreDia = "Sábado";
    swal({title:'Dia de la semana', text:nombreDia, icon:'success'});
    break;
  case 7:
    nombreDia = "Domingo";
    swal({title:'Dia de la semana', text:nombreDia, icon:'success'});
    break;
  default:
    swal({title:'Error', text:'Numero invalido, por favor ingrese de nuevo.', icon:'error'});
}

console.log(nombreDia); // Imprime "Lunes" en este caso

}