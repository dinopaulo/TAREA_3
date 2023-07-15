document.addEventListener("DOMContentLoaded", function() {
    var numerosImpares = document.getElementById("numeros-impares");
  
    for (var i = 1; i <= 100; i += 2) {
      var li = document.createElement("li");
      li.textContent = i;
      numerosImpares.appendChild(li);
    }
  });
  