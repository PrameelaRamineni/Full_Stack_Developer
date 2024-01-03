let myformEl = document.getElementById("addUserForm");
myformEl.addEventListener("submit", function(event) {
    event.preventDefault();
})

let nameEl = document.getElementById("name");
let errorMsgEl = document.getElementById("nameErrMsg");
nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorMsgEl.textContent = "Rrequired*";
    } else {
        errorMsgEl.textContent = "";
    }
})

let emailEl = document.getElementById("email");
let errorMessageEl = document.getElementById("emailErrMsg");
emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        errorMessageEl.textContent = "Required*";
    } else {
        errorMessageEl.textContent = "";
    }
})