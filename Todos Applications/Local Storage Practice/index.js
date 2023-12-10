let msgEl = document.getElementById("msg");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");
let storageKey = "userInput";
saveBtnEl.onclick = function() {
    let msgVal = msgEl.value;
    localStorage.setItem(storageKey, msgVal);
};
clearBtnEl.onclick = function() {
    msgEl.value = "";
    localStorage.removeItem(storageKey);
};
let storedUserInputVal = localStorage.getItem(storageKey);
if (storedUserInputVal !== null) {
    msgEl.value = storedUserInputVal;
} else {
    msgEl.value = "";
}