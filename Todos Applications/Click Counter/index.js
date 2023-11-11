let counterElement = document.getElementById("counterValue");
let clickCount = localStorage.getItem("clickCount"); // We are gtting the value from localstorge


if (clickCount === null) {
    counterElement.textContent = 0; //If localStorage doesnot have a value in it, we are dispalying 0
} else {
    counterElement.textContent = clickCount; //If local storage has some value, we are displaying that value
}

function onIncrementCount() {
    let previousValue = counterElement.textContent;
    let updateValue = parseInt(previousValue) + 1; //we are getting the displayed value  and incrementing it.


    localStorage.setItem("clickCount", updateValue); //We are updating the counter value in local storgae
    counterElement.textContent = updateValue; //We are displaying the updated value
}