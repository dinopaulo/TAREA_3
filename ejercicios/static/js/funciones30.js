var hombresSolteros = 0;
var mujeresSolteras = 0;
var hombresCasados = 0;
var mujeresCasadas = 0;
var hombresViudos = 0;
var mujeresViudas = 0;
var hombresDivorciados = 0;
var mujeresDivorciadas = 0;

function registrar() {
  var sexo = document.getElementById("sexo").value;
  var estadoCivil = document.getElementById("estadoCivil").value;

  // Incrementar el contador correspondiente según sexo y estado civil
  switch (sexo) {
    case "F":
      switch (estadoCivil) {
        case "S":
          mujeresSolteras++;
          break;
        case "C":
          mujeresCasadas++;
          break;
        case "V":
          mujeresViudas++;
          break;
        case "D":
          mujeresDivorciadas++;
          break;
      }
      break;
    case "M":
      switch (estadoCivil) {
        case "S":
          hombresSolteros++;
          break;
        case "C":
          hombresCasados++;
          break;
        case "V":
          hombresViudos++;
          break;
        case "D":
          hombresDivorciados++;
          break;
      }
      break;
  }

  mostrarResultados();
}

function mostrarResultados() {
  var totalHombres = hombresSolteros + hombresCasados + hombresViudos + hombresDivorciados;
  var totalMujeres = mujeresSolteras + mujeresCasadas + mujeresViudas + mujeresDivorciadas;
  var totalPersonas = totalHombres + totalMujeres;

  // Calcular los porcentajes
  var porcentajeHombresSolteros = (hombresSolteros / totalPersonas) * 100;
  var porcentajeMujeresSolteras = (mujeresSolteras / totalPersonas) * 100;
  var porcentajeHombresCasados = (hombresCasados / totalPersonas) * 100;
  var porcentajeMujeresCasadas = (mujeresCasadas / totalPersonas) * 100;
  var porcentajeHombresViudos = (hombresViudos / totalPersonas) * 100;
  var porcentajeMujeresViudas = (mujeresViudas / totalPersonas) * 100;
  var porcentajeHombresDivorciados = (hombresDivorciados / totalPersonas) * 100;
  var porcentajeMujeresDivorciadas = (mujeresDivorciadas / totalPersonas) * 100;

  // Mostrar los resultados
  document.getElementById("hombresSolteros").textContent = hombresSolteros;
  document.getElementById("mujeresSolteras").textContent = mujeresSolteras;
  document.getElementById("hombresCasados").textContent = hombresCasados;
  document.getElementById("mujeresCasadas").textContent = mujeresCasadas;
  document.getElementById("hombresViudos").textContent = hombresViudos;
  document.getElementById("mujeresViudas").textContent = mujeresViudas;
  document.getElementById("hombresDivorciados").textContent = hombresDivorciados;
  document.getElementById("mujeresDivorciadas").textContent = mujeresDivorciadas;

  document.getElementById("porcentajeHombresSolteros").textContent = porcentajeHombresSolteros.toFixed(2) + "%";
  document.getElementById("porcentajeMujeresSolteras").textContent = porcentajeMujeresSolteras.toFixed(2) + "%";
  document.getElementById("porcentajeHombresCasados").textContent = porcentajeHombresCasados.toFixed(2) + "%";
  document.getElementById("porcentajeMujeresCasadas").textContent = porcentajeMujeresCasadas.toFixed(2) + "%";
  document.getElementById("porcentajeHombresViudos").textContent = porcentajeHombresViudos.toFixed(2) + "%";
  document.getElementById("porcentajeMujeresViudas").textContent = porcentajeMujeresViudas.toFixed(2) + "%";
}