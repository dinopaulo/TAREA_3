function calcularTiempo() {
    var hi = parseInt(document.getElementById('hi').value);
    var mi = parseInt(document.getElementById('mi').value);
    var si = parseInt(document.getElementById('si').value);
    var hs = parseInt(document.getElementById('hs').value);
    var ms = parseInt(document.getElementById('ms').value);
    var ss = parseInt(document.getElementById('ss').value);

    var tiempoIngreso = new Date();
    tiempoIngreso.setHours(hi, mi, si);

    var tiempoSalida = new Date();
    tiempoSalida.setHours(hs, ms, ss);

    var tiempoTranscurrido = tiempoSalida - tiempoIngreso;

    var segundos = Math.floor(tiempoTranscurrido / 1000) % 60;
    var minutos = Math.floor(tiempoTranscurrido / (1000 * 60)) % 60;
    var horas = Math.floor(tiempoTranscurrido / (1000 * 60 * 60));

    var result = document.getElementById('result');
    result.textContent = 'Tiempo transcurrido: ' + horas + ' horas, ' + minutos + ' minutos, ' + segundos + ' segundos.';
  }