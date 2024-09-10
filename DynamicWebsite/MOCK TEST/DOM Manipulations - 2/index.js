let myContainerEl = document.getElementById("myContainer");
let checkboxEl = document.createElement("input");
//let heading = document.getElementById("heading");
checkboxEl.type="checkbox";
checkboxEl.id="myCheckBox";
checkboxEl.checked;

let labelEl = document.createElement("label");
labelEl.textContent = "Color the heading element";
labelEl.setAttribute("for", "myCheckBox");
myContainerEl.appendChild(checkboxEl);
myContainerEl.appendChild(labelEl);

let headingEl = document.createElement("h1");
headingEl.textContent = "heading Element";
myContainerEl.appendChild(headingEl);

checkboxEl.onclick = function() {
    headingEl.classList.toggle("heading");
    labelEl.textContent = "Uncolor the heading element";
};