document.getElementById('convertirButton').addEventListener('click', function() {
    var input = document.getElementById('temperaturaInput').value;
    if (input === '999') {
        return;
    }
    var fahrenheit = parseFloat(input);
    var celsius = (5/9) * (fahrenheit - 32);
    document.getElementById('resultado').innerHTML = fahrenheit + ' grados Fahrenheit equivalen a ' + celsius.toFixed(2) + ' grados Celsius.';
});
