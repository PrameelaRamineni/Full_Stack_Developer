let updatePasswordFormEl = document.getElementById("updatePasswordForm");

let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
newPasswordErrMsgEl.classList.add("error");

let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");
confirmPasswordErrMsgEl.classList.add("error");

let validateNewPassword = function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
};

let validateConfirmPassword = function() {
    let newPassword = newPasswordEl.value;
    let confirmPassword = confirmPasswordEl.value;

    if (newPasswordEl.value !== confirmPasswordEl.value) {
        confirmPasswordErrMsgEl.textContent = "Passwordds must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
}

newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);

updatePasswordFormEl.addEventListener("submit", function(event) {
    validateNewPassword();
    validateConfirmPassword();
    event.preventDefault();
});