document.addEventListener("DOMContentLoaded", function() {
  var multiplesList = document.getElementById("multiples-list");

  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      var li = document.createElement("li");
      li.textContent = i;
      multiplesList.appendChild(li);
    }
  }
});
