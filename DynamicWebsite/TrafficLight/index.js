let stoplightelement = document.getElementById("stopLight");
let readylightelement = document.getElementById("readyLight");
let golightelement = document.getElementById("goLight");
let stopbuttonelement = document.getElementById("stopButton");
let readybuttonelement = document.getElementById("readyButton");
let gobuttonelement = document.getElementById("goButton");

function turnOnRed() {
    stoplightelement.style.backgroundColor = "#cf1124"
    stopbuttonelement.style.backgroundColor = "#cf1124"

    readylightelement.style.backgroundColor = "#1f1d41";
    readybuttonelement.style.backgroundColor = "#4b5069";
    golightelement.style.backgroundColor = "#1f1d41";
    gobuttonelement.style.backgroundColor = "#4b5069";
}

function turnOnYellow() {
    readylightelement.style.backgroundColor = "#f7c948"
    readybuttonelement.style.backgroundColor = "#f7c948"

    stoplightelement.style.backgroundColor = "#1f1d41";
    stopbuttonelement.style.backgroundColor = "#4b5069";
    golightelement.style.backgroundColor = "#1f1d41";
    gobuttonelement.style.backgroundColor = "#4b5069";
}

function turnOnGreen() {
    golightelement.style.backgroundColor = "#199473"
    gobuttonelement.style.backgroundColor = "#199473"

    stoplightelement.style.backgroundColor = "#1f1d41";
    stopbuttonelement.style.backgroundColor = "#4b5069";
    readylightelement.style.backgroundColor = "#1f1d41";
    readybuttonelement.style.backgroundColor = "#4b5069";
}