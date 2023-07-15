document.addEventListener("DOMContentLoaded", function() {
    var numbersContainer = document.getElementById("numbers-container");

    for (var i = 1; i <= 9; i++) {
        var number = document.createElement("div");
        number.classList.add("number");
        number.textContent = i;
        numbersContainer.appendChild(number);
    }
});
