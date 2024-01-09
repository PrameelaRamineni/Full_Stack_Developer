// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");

function addBookmark() {
    let siteName = siteNameInput.value;
    let siteURL = siteUrlInput.value;
    let listItem = document.createElement("li");
    bookmarksList.appendChild(listItem);
    let bookmarkName = document.createElement("p");
    let bookmarkurl = document.createElement("a");
    bookmarkName.textContent = siteName;
    bookmarkurl.textContent = siteURL;
    bookmarkurl.href = siteURL;
    bookmarkurl.setAttribute("target", "_blank");
    bookmarksList.classList.toggle("d-none");
    listItem.appendChild(bookmarkName);
    listItem.appendChild(bookmarkurl);
}

siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";

    }
});
siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});
bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookmark();
});