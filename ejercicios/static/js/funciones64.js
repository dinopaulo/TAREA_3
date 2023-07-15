document.getElementById("forBtn").addEventListener("click", generateTableWithFor);
document.getElementById("whileBtn").addEventListener("click", generateTableWithWhile);
document.getElementById("doWhileBtn").addEventListener("click", generateTableWithDoWhile);

function generateTableWithFor() {
  var table = document.getElementById("table");
  table.innerHTML = "";

  for (var i = 1; i <= 10; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    cell1.innerHTML = i;
    cell2.innerHTML = i * 2;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
  }
}

function generateTableWithWhile() {
  var table = document.getElementById("table");
  table.innerHTML = "";

  var i = 1;
  while (i <= 10) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    cell1.innerHTML = i;
    cell2.innerHTML = i * 2;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
    i++;
  }
}

function generateTableWithDoWhile() {
  var table = document.getElementById("table");
  table.innerHTML = "";

  var i = 1;
  do {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    cell1.innerHTML = i;
    cell2.innerHTML = i * 2;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
    i++;
  } while (i <= 10);
}
