function convertir(){
    var tasa = 1.17;
    var euros = parseFloat(document.getElementById('num').value);
    var dolares = euros * tasa;
    var msg = "€: "+ euros + "  ⇨  $: " + dolares;
    alert (msg);
}