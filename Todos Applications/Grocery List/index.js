let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

//container
//let groceryItems=groceryList.length;
let groceryContainerEl = document.getElementById("groceryListContainer");
groceryContainerEl.classList.add("groceryContainer");
//heading 
let headingEl = document.createElement("h1");
headingEl.textContent = "Grocery List";
headingEl.classList.add("grocery");
groceryContainerEl.appendChild(headingEl);
//listcontainer 
let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("listContainer");
groceryContainerEl.appendChild(listContainerEl);
//list-elements 
for (let items of groceryList) {
    let listElement = document.createElement("li");
    listElement.classList.add("list-elements");
    listElement.textContent = items;
    listContainerEl.appendChild(listElement);

    console.log(listElement);
}