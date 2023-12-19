let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

function createAndAppendKeyCode(keyCode) {
    let listItemEl = document.createElement("li");
    listItemEl.classList.add("mt-1");
    listItemEl.textContent = keyCode;
    keyCodeListEl.appendChild(listItemEl);
}

function onKeyDown(event) {
    createAndAppendKeyCode(event.keyCode);
}

userInputEl.addEventListener("keydown", onkeydown);