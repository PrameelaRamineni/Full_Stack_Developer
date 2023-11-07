let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
];

let skillListContainerEl = document.getElementById("skillListContainer");

function onMarkSkill(labelId) {
//let checkboxElement = document.getElementById(checkboxId);
let labelElement = document.getElementById(labelId);
labelElement.classList.toggle("checked");
}

function createAndAppendSkill(skill) {
let labelId = "label" + skill.uniqueNo;
let checkboxId = "checkbox" + skill.uniqueNo;


let skillElement = document.createElement("li");
skillElement.classList.add("p-1");
skillListContainerEl.appendChild(skillElement);

let checkBoxElement = document.createElement("input");
checkBoxElement.type = "checkbox";
checkBoxElement.id = checkboxId;

checkBoxElement.onclick = function() {
    onMarkSkill(labelId);
};

skillElement.appendChild(checkBoxElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", checkboxId);
labelElement.classList.add("checkbox-label");
labelElement.textContent = skill.skillName;
labelElement.id = labelId;
skillElement.appendChild(labelElement)
}

for (let skill of skillList) {
createAndAppendSkill(skill);
}