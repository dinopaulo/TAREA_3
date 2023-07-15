document.addEventListener("DOMContentLoaded", function() {
    var numerosPares = document.getElementById("numeros-pares");
  
    for (var i = 0; i <= 100; i += 2) {
      var li = document.createElement("li");
      li.textContent = i;
      numerosPares.appendChild(li);
    }
  });
  