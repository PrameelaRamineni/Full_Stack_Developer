let backgroundColor = document.getElementById("colorPickerContainer");
let changeHexcode = document.getElementById("selectedColorHexCode");

function changeBgToGreyAndUpdateText() {
    document.getElementById("colorPickerContainer").style.backgroundColor = "#e0e0e0";
    document.getElementById("selectedColorHexCode").textContent = "#e0e0e0";
}

function changeBgToGreenAndUpdateText() {
    document.getElementById("colorPickerContainer").style.backgroundColor = "#6fcf97";
    document.getElementById("selectedColorHexCode").textContent = "#6fcf97";
}

function changeBgToBlueAndUpdateText() {
    document.getElementById("colorPickerContainer").style.backgroundColor = "#56ccf2";
    document.getElementById("selectedColorHexCode").textContent = "#56ccf2";
}

function changeBgToPinkAndUpdateText() {
    document.getElementById("colorPickerContainer").style.backgroundColor = "#bb6bd9";
    document.getElementById("selectedColorHexCode").textContent = "#bb6bd9";
}