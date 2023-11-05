let checkBoxLabelConatiner = document.getElementById("checkBoxWithLabelContainer");
let checkBoxId = "checkbox";
let labelId = "checkboxLabel";

function onCheckBoxStatusChange() {
    checkboxLabelElement.classList.toggle("strike-through");
}

let checkBoxInputElement = document.createElement("input");
checkBoxInputElement.type = "checkbox";
checkBoxInputElement.id = checkBoxId;

checkBoxInputElement.onclick = function() {
    onCheckBoxStatusChange();
};
checkBoxLabelConatiner.appendChild(checkBoxInputElement);

let checkboxLabelElement = document.createElement("label");
checkboxLabelElement.classList.add("checkbox-label");
checkboxLabelElement.setAttribute("for", checkBoxId);
checkboxLabelElement.id = labelId;
checkboxLabelElement.textContent = "I am a label";
checkBoxLabelConatiner.appendChild(checkboxLabelElement);