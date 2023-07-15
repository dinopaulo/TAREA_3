document.addEventListener("DOMContentLoaded", function() {
    var resultado = 1;
    for (var i = 1; i <= 20; i++) {
        result *= i;
    }
    document.getElementById("result").innerHTML = "El resultado es: " + resultado;
});
