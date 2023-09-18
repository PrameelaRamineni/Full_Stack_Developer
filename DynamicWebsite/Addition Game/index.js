// access the elements as below.
let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

//Define the messages.
let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";

// Write a function as shown below to restartGame.
function restartFunction() {
    //create two random numbers using Math.random() as below.
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;

    //place the numbers in the elements to display the numbers.
    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);

    //place the value to empty so that whenever the reset button is clicked the userinput value will be empty.
    gameResultElement.textContent = "";
    userInputElement.value = "";
}
// call the function to display the values and to reset userinput values.
restartFunction();

//Once the numbers are displayed write a function to checkResult
function checkFunction() {
    //Display the random numbers generated and parseInt them.
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let secondRandomInteger = parseInt(secondNumberElement.textContent);

    //Get the userEnterdSum value
    let userEnteredSum = parseInt(userInputElement.value);

    //Calculated the sum of the two numbers
    let sumOfTwoRandomIntegers = firstRandomInteger + secondRandomInteger;

    //Check if userEnteredSum is equal to sumOfTwoRandomIntegers
    if (userEnteredSum === sumOfTwoRandomIntegers) {
        gameResultElement.textContent = successMessage; //If yes, display successMessage
        gameResultElement.style.backgroundColor = "#028a0f";

    } else {
        gameResultElement.textContent = tryAgainMessage; //If no, display tryAgainMessage 
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}