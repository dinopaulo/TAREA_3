function Sumar_o_Restar() {
    var num_A= parseInt(document.getElementById('nume_a').value);
    var num_B= parseInt(document.getElementById('nume_b').value);
    var resultado = 0;
    if (num_A< num_B) {
      resultado = num_A - num_B;
      alert(resultado)
    } else {
      resultado = num_A + num_B;
      alert(resultado);
    }
  }