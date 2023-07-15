function calcularDescuento() {
    var descuento;
    let precioVenta = parseFloat(document.getElementById('precio').value);
    if (precioVenta < 100) {
      descuento = 0.05; // 5%
    } else if (precioVenta < 200) {
      descuento = 0.1; // 10%
    } else {
      descuento = 0.15; // 15%
    }
    var descuentoEnPesos = descuento * precioVenta;
    var precioFinal = precioVenta - descuentoEnPesos;
    swal({
        title: "Total 💲",
        text: "Descuento: $" + descuentoEnPesos.toFixed(2) + ", Precio final: $" + precioFinal.toFixed(2),
        icon: "success"
      })
      clear();
  }
function clear(){
    precioVenta = parseFloat(document.getElementById('precio').value="");
}  
