document.addEventListener("DOMContentLoaded", function() {
    var tablesDiv = document.getElementById("tables");
    
    for (var i = 1; i <= 9; i++) {
      var table = document.createElement("div");
      table.classList.add("table");
      
      var title = document.createElement("h2");
      title.classList.add("table-title");
      title.textContent = "Tabla del " + i;
      
      var content = document.createElement("div");
      content.classList.add("table-content");
      
      for (var j = 1; j <= 10; j++) {
        var row = document.createElement("div");
        row.classList.add("table-row");
        
        var multiplicando = document.createElement("span");
        multiplicando.textContent = i;
        
        var multiplicador = document.createElement("span");
        multiplicador.textContent = "x " + j;
        
        var igual = document.createElement("span");
        igual.textContent = "=";
        
        var resultado = document.createElement("span");
        resultado.classList.add("result");
        resultado.textContent = i * j;
        
        row.appendChild(multiplicando);
        row.appendChild(multiplicador);
        row.appendChild(igual);
        row.appendChild(resultado);
        
        content.appendChild(row);
      }
      
      table.appendChild(title);
      table.appendChild(content);
      tablesDiv.appendChild(table);
    }
  });
  