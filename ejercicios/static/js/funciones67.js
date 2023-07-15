function calculateAverages() {
    var numbersInput = document.getElementById("numbersInput").value;
    var numbers = numbersInput.split(",");
    var positiveSum = 0;
    var positiveCount = 0;
    var negativeSum = 0;
    var negativeCount = 0;
  
    for (var i = 0; i < numbers.length; i++) {
      var number = parseFloat(numbers[i]);
      if (number > 0) {
        positiveSum += number;
        positiveCount++;
      } else if (number < 0) {
        negativeSum += number;
        negativeCount++;
      }
    }
  
    var positiveAverage = positiveCount > 0 ? positiveSum / positiveCount : 0;
    var negativeAverage = negativeCount > 0 ? negativeSum / negativeCount : 0;
  
    document.getElementById("positiveAverage").innerHTML = "Promedio de valores positivos: " + positiveAverage.toFixed(2);
    document.getElementById("negativeAverage").innerHTML = "Promedio de valores negativos: " + negativeAverage.toFixed(2);
  }
  