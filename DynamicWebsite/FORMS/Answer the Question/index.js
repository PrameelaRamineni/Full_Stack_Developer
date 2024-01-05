let questionsFormEl = document.getElementById("questionsForm");

let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");
let resultMsgEl = document.getElementById("resultMsg");

let capitalCity = "Delhi";
let selectedCity = null;

cityHyderabadEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityChennaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityDelhiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityMumbaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

questionsFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

    if (selectedCity === capitalCity) {
        resultMsgEl.textContent = "Correct Answer";
        resultMsgEl.style.color = "#2b9a40";
    } else if (selectedCity === null) {
        resultMsgEl.textContent = "please Enter The value";
        resultMsgEl.style.color = "#dc3545";
    } else {
        resultMsgEl.textContent = "Wrong Answer";
        resultMsgEl.style.color = "#dc3545";
    }
});