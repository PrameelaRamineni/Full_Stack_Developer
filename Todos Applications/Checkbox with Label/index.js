let checkboxWithLabelContainerEl = document.getElementById("checkboxWithLabelContainer");

//Input
let checkBoxEl = document.createElement("input");
checkBoxEl.type = "checkbox";
checkBoxEl.id = "checkbox";
checkboxWithLabelContainerEl.appendChild(checkBoxEl);


//label
let labelEl = document.createElement("label");
labelEl.setAttribute("for", "checkbox");
labelEl.textContent = "Click Me!";
labelEl.classList.add("ml-2");
labelEl.id = "checkboxLabel";
checkboxWithLabelContainerEl.appendChild(labelEl);