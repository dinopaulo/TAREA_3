const multiplosContainer = document.querySelector('.multiplos');
    for (let i = 6; i < 100; i += 6) {
      const multipleElement = document.createElement('div');
      multipleElement.classList.add('multiplo');
      multipleElement.textContent = i;
      multiplosContainer.appendChild(multipleElement);
    }