function agregarRectangulo() {
    var rectanglesContainer = document.getElementById("rectangles");
  
    var rectangle = document.createElement("div");
    rectangle.classList.add("rectangle");
  
    rectangle.innerHTML = `
      <label>Base: <input type="number" class="base"></label><br>
      <label>Altura: <input type="number" class="altura"></label>
    `;
  
    rectanglesContainer.appendChild(rectangle);
  }
  
  function calcularResultados() {
    var rectangles = document.getElementsByClassName("rectangle");
  
    for (var i = 0; i < rectangles.length; i++) {
      var base = parseFloat(rectangles[i].querySelector(".base").value);
      var altura = parseFloat(rectangles[i].querySelector(".altura").value);
  
      var perimetro = 2 * (base + altura);
      var superficie = base * altura;
  
      alert("Rectángulo " + (i + 1) + ":");
      alert("Perímetro: " + perimetro);
      alert("Superficie: " + superficie);
    }
  }
  