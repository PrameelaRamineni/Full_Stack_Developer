let myformEl = document.getElementById("subscribeForm");
myformEl = addEventListener("submit", function(event) {
    event.preventDefault();
})

let nameEl = document.getElementById("name");
let errorMsgEl = document.getElementById("nameErrMsg");
nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorMsgEl.textContent = "Required*";
    } else {
        errorMsgEl.textContent = "";
    }
});

let emailEl = document.getElementById("email");
let emailMsgEl = document.getElementById("emailErrMsg");
emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailMsgEl.textContent = "Required*";
    } else {
        emailMsgEl.textContent = "";
    }
});