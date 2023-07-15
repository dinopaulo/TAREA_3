function calcular_frac(){
    var numerador1 = parseFloat(document.getElementById('nume_1f').value);
    var denominador1 = parseFloat(document.getElementById('deno_1f').value);
    var numerador2 = parseFloat(document.getElementById('nume_2f').value);
    var denominador2 = parseFloat(document.getElementById('deno_2f').value);
    var numeradorSuma = numerador1 * denominador2 + numerador2 * denominador1;
    var denominadorSuma = denominador1 * denominador2;
    alert("La suma de las fracciones es: " + numeradorSuma + "/" + denominadorSuma);
}