let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainerEle = document.getElementById('profileContainer');
profileContainerEle.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");

let imgContainerEle = document.getElementById("imgContainer");
let imgEle = document.createElement("img");
imgEle.setAttribute("src", profileDetails.imgSrc);
imgEle.classList.add("profile-img");
imgContainerEle.appendChild(imgEle);

let nameEle = document.createElement("h1");
nameEle.classList.add("profile-name");
nameEle.textContent = profileDetails.name;
profileContainerEle.appendChild(nameEle);

let ageEle = document.createElement("p");
ageEle.classList.add("age");
ageEle.textContent = "Age: " + profileDetails.age;
profileContainerEle.appendChild(ageEle);