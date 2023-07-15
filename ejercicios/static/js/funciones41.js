window.addEventListener('DOMContentLoaded', function() {
    var numerosDiv = document.getElementById('numeros');
    var numer = '';
    for (var i = 5; i <= 15; i++) {
        numer += i + ' ';
    }

    numerosDiv.textContent = numer;
});
