// Función para calcular el cubo de un número
function calcularCubo(numero) {
    return numero ** 3;
  }
  
  // Calcular y mostrar el cubo de los números naturales con un máximo de cuatro cifras
  const cubosContainer = document.getElementById('cubos-container');
  for (let i = 1; i <= 9; i++) {
    const cubo = calcularCubo(i);
    if (cubo.toString().length <= 4) {
      const cuboElement = document.createElement('div');
      cuboElement.classList.add('cubo');
      cuboElement.textContent = cubo;
      cubosContainer.appendChild(cuboElement);
    }
  }
  