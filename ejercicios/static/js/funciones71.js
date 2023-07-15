
function verificarParImpar() {
    var numero = document.getElementById("numero").value;

    if (Number.isInteger(parseFloat(numero)) && numero > 0) {
        if (numero % 2 === 0) {
            document.getElementById("resultado").innerHTML = "El número " + numero + " es par.";
        } else {
            document.getElementById("resultado").innerHTML = "El número " + numero + " es impar.";
        }
    } else {
        document.getElementById("resultado").innerHTML = "Ingrese un número entero y positivo válido.";
    }
}
