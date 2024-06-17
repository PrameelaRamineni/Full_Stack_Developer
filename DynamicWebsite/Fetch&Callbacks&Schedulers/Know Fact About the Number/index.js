let userInput = document.getElementById("userInput");
let fact = document.getElementById("fact");
let userInputValue = "";
let spinnerEl = document.getElementById("spinner");

function gettingDataFromServer(userInputValue) {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/numbers-fact?number=" + userInputValue, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            fact.classList.remove("d-none");
            fact.textContent = jsonData.fact;
        });
}

function gettingNumberData() {
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none");
        fact.classList.add("d-none");
        userInputValue = event.target.value;
        gettingDataFromServer(userInputValue);
    }
}

userInput.addEventListener("keydown", gettingNumberData);