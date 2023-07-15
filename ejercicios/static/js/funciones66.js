function calculateFibonacci() {
    var numberInput = document.getElementById('number-input');
    var sequenceList = document.getElementById('fibonacci-sequence');
    sequenceList.innerHTML = '';

    var number = parseInt(numberInput.value);
    if (!isNaN(number) && number > 0) {
      var fibonacciSequence = [1, 1];
      
      for (var i = 2; i <= number; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
      }
      
      fibonacciSequence.forEach(function (fibonacciNumber) {
        var li = document.createElement('li');
        li.textContent = fibonacciNumber;
        sequenceList.appendChild(li);
      });
    }
  }