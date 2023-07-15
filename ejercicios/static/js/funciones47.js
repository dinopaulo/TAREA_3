function imprimeImpares() {
    var input = document.getElementById("numeroInput").value;
    var output = document.getElementById("output");
    output.innerHTML = ""; // Limpiar el contenido anterior

    for (var i = 1; i < input; i += 2) {
        output.innerHTML += i + " ";
    }
}
