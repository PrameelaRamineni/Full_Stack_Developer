let reviewContainerEl = document.getElementById("reviewsContainer");
let titleInputEl = document.getElementById("titleInput");
let reviewTextareaEl = document.getElementById("reviewTextarea");

function onAddReview() {
    let movieTitle = titleInputEl.value;
    let movieReview = reviewTextareaEl.value;

    if (movieTitle === "") {
        alert("Enter Valid Text");
        return;
    }

    let movieTitleEl = document.createElement("hi");
    movieTitleEl.textContent = "Movie Title: " + movieTitle;
    movieTitleEl.classList.add("movie-title");
    reviewContainerEl.appendChild(movieTitleEl);

    //creating and appending the movieReviewEl to the reviewContainer
    let movieReviewEl = document.createElement("p");
    movieReviewEl.textContent = "Review: " + movieReview;
    reviewContainerEl.appendChild(movieReviewEl);

    //creating and appending the horizontal line to the reviewContainer 
    //after adding movieTitleEl and movieReviewEl
    let horizontalLineEl = document.createElement("hr");
    reviewContainerEl.appendChild(horizontalLineEl);
    //clearing the values of titleinputel and reviewTextareaEl
    titleInputEl.value = "";
    reviewTextareaEl.value = "";
}