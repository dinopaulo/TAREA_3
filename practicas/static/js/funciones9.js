function calculo() {
    var nombre = document.getElementById("nom").value;
    var apellido = document.getElementById("ape").value;
    var cedula = document.getElementById("c_i").value;
    const presupuesto = 500;
    var va_1 = parseFloat (document.getElementById("va-1").value);
    var va_2 = parseFloat (document.getElementById("va-2").value);
    var va_3 = parseFloat (document.getElementById("va-3").value);
    var total_compra = va_1 + va_2 + va_3;
    const resultado_cont = document.getElementById("resultado-v");
    
    if (total_compra < presupuesto) {
      var msg =
        "El Sr/a. " +
        nombre +" "+ apellido +
        " , con un total de: " +
        total_compra +
        " . Esta dentro del presupuesto";
    } else {
      var msg =
        "El Sr/a. " +
        nombre +" "+ apellido +
        " , con un total de: " +
        total_compra +
        " . No esta dentro del presupuesto";
    }
    resultado_cont.innerHTML = msg;
    openModal();
  }
  function cerrar (){
      closeModal();
      borrar_campos();
  }
  function borrar_campos(){
      document.getElementById("nom").value = "";
      document.getElementById("ape").value = "";
      document.getElementById("c_i").value = "";
      document.getElementById("va-1").value = "";
      document.getElementById("va-2").value = "";
      document.getElementById("va-3").value = "";
  }
  const modal = document.getElementById("mainModal");
  const openModal = () => {
    modal.showModal();
  };
  const closeModal = () => {
    modal.close();
  };