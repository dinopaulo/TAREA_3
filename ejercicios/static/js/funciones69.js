var varones = 0; // Cantidad de varones
var mujeres = 0; // Cantidad de mujeres
var alturaTotal = 0; // Suma de alturas
var alumnosMayor1_5 = 0; // Cantidad de alumnos con altura mayor a 1.5 metros

document.getElementById('alumnosForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var sexo = document.getElementById('sexo').value;
  var edad = parseInt(document.getElementById('edad').value);
  var altura = parseFloat(document.getElementById('altura').value);

  // Verificar si la edad es igual a 0 para finalizar el programa
  if (edad === 0) {
    mostrarResultados();
    return;
  }

  if (sexo === 'M') {
    varones++;
  } else if (sexo === 'F') {
    mujeres++;
  }

  alturaTotal += altura;

  if (altura > 1.5) {
    alumnosMayor1_5++;
  }

  // Limpiar los campos del formulario
  document.getElementById('sexo').value = 'M';
  document.getElementById('edad').value = '';
  document.getElementById('altura').value = '';
});

function mostrarResultados() {
  // Calcular la altura promedio
  var alturaPromedio = alturaTotal / (varones + mujeres);

  // Mostrar los resultados en el HTML
  document.getElementById('varones').textContent = 'Varones: ' + varones;
  document.getElementById('mujeres').textContent = 'Mujeres: ' + mujeres;
  document.getElementById('alturaPromedio').textContent = 'Altura promedio: ' + alturaPromedio.toFixed(2) + ' metros';
  document.getElementById('alturaMayor1_5').textContent = 'Alumnos con altura mayor a 1.5m: ' + alumnosMayor1_5;
}

