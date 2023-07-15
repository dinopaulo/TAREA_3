document.addEventListener('DOMContentLoaded', function() {
    var numbersContainer = document.getElementById('numbers');

    for (var i = 5; i <= 10; i++) {
      var numberElement = document.createElement('div');
      numberElement.classList.add('number');
      numberElement.textContent = i;
      numbersContainer.appendChild(numberElement);
    }
  });