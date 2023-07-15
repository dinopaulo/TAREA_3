const temperatures = [];

function addTemperature() {
  const inputElement = document.getElementById('temperature');
  const temperature = parseInt(inputElement.value);

  if (isNaN(temperature)) {
    alert('Por favor, ingresa una temperatura válida.');
    return;
  }

  temperatures.push(temperature);
  inputElement.value = '';

  updateTemperatureDisplay();
}

function findMinMaxTemperatures(temps) {
  let minTemp = temps[0];
  let maxTemp = temps[0];
  let minHour = 0;
  let maxHour = 0;

  for (let i = 1; i < temps.length; i++) {
    if (temps[i] < minTemp) {
      minTemp = temps[i];
      minHour = i;
    }

    if (temps[i] > maxTemp) {
      maxTemp = temps[i];
      maxHour = i;
    }
  }

  return { minTemp, maxTemp, minHour, maxHour };
}

function updateTemperatureDisplay() {
  const temperaturesDiv = document.getElementById('temperatures');
  temperaturesDiv.innerHTML = '';

  if (temperatures.length === 0) {
    temperaturesDiv.textContent = 'No se han registrado temperaturas.';
    return;
  }

  const { minTemp, maxTemp, minHour, maxHour } = findMinMaxTemperatures(temperatures);

  const minElement = document.createElement('div');
  minElement.classList.add('hour', 'min');
  minElement.textContent = `Hora temperatura mínima: ${minHour}`;

  const maxElement = document.createElement('div');
  maxElement.classList.add('hour', 'max');
  maxElement.textContent = `Hora temperatura máxima: ${maxHour}`;

  temperaturesDiv.appendChild(minElement);
  temperaturesDiv.appendChild(maxElement);
}
