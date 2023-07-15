function generarTabla() {
    var numberInput = document.getElementById("numeroInput");
    var tablaBody = document.querySelector("#multiplicacionTabla tbody");
    tablaBody.innerHTML = "";
  
    var number = parseInt(numberInput.value);
  
    for (var i = 1; i <= 12; i++) {
      var fila = document.createElement("tr");
      var celda1 = document.createElement("td");
      var celda2 = document.createElement("td");
      var celda3 = document.createElement("td");
  
      celda1.innerHTML = i;
      celda2.innerHTML = number;
      celda3.innerHTML = number * i;
  
      fila.appendChild(celda1);
      fila.appendChild(celda2);
      fila.appendChild(celda3);
      tablaBody.appendChild(fila);
    }
  }
  