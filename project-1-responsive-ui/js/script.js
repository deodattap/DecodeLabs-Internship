var plus = document.querySelectorAll(".plus");
var minus = document.querySelectorAll(".minus");

plus.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var number = btn.previousElementSibling;
        number.innerText = parseInt(number.innerText) + 1;
    });
});

minus.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var number = btn.nextElementSibling;
        if (parseInt(number.innerText) > 1) {
            number.innerText = parseInt(number.innerText) - 1;
        }
    });
});