function calcularDias() {
    var startDate = new Date(document.getElementById("start-date").value);
    var endDate = new Date(document.getElementById("end-date").value);

    var days = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));

    document.getElementById("result").innerText = "Días entre las fechas: " + days;
  }