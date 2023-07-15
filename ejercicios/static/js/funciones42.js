document.addEventListener("DOMContentLoaded", function() {
    var numberList = document.getElementById("number-list");
  
    for (var i = 5; i <= 15000; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = i;
      numberList.appendChild(listItem);
    }
  });
  