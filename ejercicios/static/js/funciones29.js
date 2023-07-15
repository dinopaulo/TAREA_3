//Instanciamos las variables de conteo
var totalVarones = 0;
var totalMujeres = 0;
var totalGeneral = 0;

function registro() {
    var dia = document.getElementById('dia').value;
    var mes = document.getElementById('mes').value;
    var anio = document.getElementById('anio').value;
    var sexo = document.getElementById('sexo').value;
    if (sexo == 1) {
        totalMujeres++;
      } else if (sexo == 2) {
        totalVarones++;
      }
      //limpieza de campos
      document.getElementById('dia').value = '';
      document.getElementById('mes').value = '';
      document.getElementById('anio').value = '';
      document.getElementById('sexo').value = '1';
    }
function mostrarResultados(){
    const totalGeneral = totalMujeres + totalVarones;
    swal({
        title: "Registro de Nacimientos",
        text: "Total de varones ♂: " + totalVarones + "\nTotal de mujeres ♀: " + totalMujeres + "\nTotal general 🚻: " + totalGeneral,
        icon: "success"
      })
}    

  
  