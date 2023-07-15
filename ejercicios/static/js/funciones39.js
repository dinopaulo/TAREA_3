document.addEventListener("DOMContentLoaded", function() {
    var numberList = document.getElementById("number-list");

    for (var i = 1; i <= 10000; i++) {
        var li = document.createElement("li");
        li.textContent = i;
        numberList.appendChild(li);
    }
});
