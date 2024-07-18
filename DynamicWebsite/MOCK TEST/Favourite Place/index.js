let favPlacesEl = document.getElementById("favPlaces");
let lucknowEl = document.getElementById("lucknow");
let agraEl = document.getElementById("agra");
let varanasiEl = document.getElementById("varanasi");
let submitBtnEl = document.getElementById("submitBtn");
let messageEl = document.getElementById("message");

favPlacesEl.addEventListener("submit", function(event) {
    event.preventDefault();
});

submitBtnEl.onclick = function() {
    if (lucknowEl.checked) {
        messageEl.textContent = "Your favourite place is: Lucknow";
    } else if (agraEl.checked) {
        messageEl.textContent = "Your favourite place is: Agra";
    } else if (varanasiEl.checked) {
        messageEl.textContent = "Your favourite place is: Varanasi";
    }
};