function obtenerSigno() {
  var dia = parseInt(document.getElementById("day").value);
  var mes = parseInt(document.getElementById("month").value);
  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
    swal({
      title: "Tu signo del zodiaco es:",
      text: "Acuario ♒",
      icon: "success",
    });
    cleanInpunts();
  } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
    swal({
      title: "Tu signo del zodiaco es:",
      text: "Picis ♓",
      icon: "success",
    });
    cleanInpunts();
  } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
    swal({
      title: "Tu signo del zodiaco es:",
      text: "Aries ♈",
      icon: "success",
    });
    cleanInpunts();
  } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
    swal({
      title: "Tu signo del zodiaco es:",
      text: "Tauro ♉",
      icon: "success",
    });
    cleanInpunts();
  } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
    swal({
      title: "Tu signo del zodiaco es:",
      text: "Geminis ♊",
      icon: "success",
    });
    cleanInpunts();
  } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
    swal({
      title: "Tu signo del zodiaco es:",
      text: "Cancer ♋",
      icon: "success",
    });
    cleanInpunts();
  } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
    swal({
      title: "Tu signo del zodiaco es:",
      text: "Leo ♌",
      icon: "success",
    });
    cleanInpunts();
  } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
    swal({
      title: "Tu signo del zodiaco es:",
      text: "Virgo ♍",
      icon: "success",
    });
    cleanInpunts();
  } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
    swal({
      title: "Tu signo del zodiaco es:",
      text: "Libra ♎",
      icon: "success",
    });
    cleanInpunts();
  } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
    swal({
      title: "Tu signo del zodiaco es:",
      text: "Escorpio ♏",
      icon: "success",
    });
    cleanInpunts();
  } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
    swal({
      title: "Tu signo del zodiaco es:",
      text: "Sagitario ♐",
      icon: "success",
    });
    cleanInpunts();
  } else {
    swal({
      title: "Tu signo del zodiaco es:",
      text: "Capricornio ♑",
      icon: "success",
    });
    cleanInpunts();
  }
}
function cleanInpunts() {
  dia = document.getElementById("day").value = "";
  mes = document.getElementById("month").value = "";
}
