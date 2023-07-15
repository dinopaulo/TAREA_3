document.addEventListener("DOMContentLoaded", function() {
    var outputDiv = document.getElementById("output");
  
    for (var i = 1; i <= 30; i++) {
      var square = i * i;
      var span = document.createElement("span");
      span.textContent = square + " ";
      outputDiv.appendChild(span);
    }
  });
  