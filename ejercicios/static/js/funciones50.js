function ejecutarSwitch() {
    var opcion = document.getElementById("opcion").value;
    
    for (var i = 0; i < 5; i++) {
      switch (parseInt(opcion)) {
        case 1:
        document.getElementById('resultado').innerHTML = "Mensaje del caso 1";
          break;
        case 2:
            document.getElementById('resultado').innerHTML = "Mensaje del caso 2";
          break;
        case 3:
            document.getElementById('resultado').innerHTML = "Mensaje del caso 3";
          break;
        case 4:
            document.getElementById('resultado').innerHTML = "Mensaje del caso 4";
          break;
        case 5:
            document.getElementById('resultado').innerHTML = "Mensaje del caso 5";
          break;
        case 6:
            document.getElementById('resultado').innerHTML = "Mensaje del caso 6";
          break;
        case 7:
            document.getElementById('resultado').innerHTML = "Mensaje del caso 7";
          break;
        case 8:
            document.getElementById('resultado').innerHTML = "Mensaje del caso 8";
          break;
        case 9:
            document.getElementById('resultado').innerHTML = "Mensaje del caso 9";
          break;
        case 10:
            document.getElementById('resultado').innerHTML = "Mensaje del caso 10";
          break;
        default:
            document.getElementById('resultado').innerHTML = "Opcion invalida";
          break;
      }
    }
  }
  