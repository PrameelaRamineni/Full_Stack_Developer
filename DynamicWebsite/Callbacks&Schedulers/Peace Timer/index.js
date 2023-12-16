let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let fortySecondsBtnElleft = 0;
let timerCompletedText = "Your moment is complete";
let timerId;

function clearPreviousTimer() {
    clearInterval(timerId);
}

twentySecondsBtnEl.onclick = function() {
    secondsLeft = 20;
    clearPreviousTimer();
    setTimerAndShow();
};

thirtySecondsBtnEl.onclick = function() {
    secondsLeft = 30;
    clearPreviousTimer();
    setTimerAndShow();
};

fortySecondsBtnEl.onclick = function() {
    secondsLeft = 40;
    clearPreviousTimer();
    setTimerAndShow();
};

oneMinuteBtnEl.onclick = function() {
    secondsLeft = 60;
    clearPreviousTimer();
    setTimerAndShow();
};

function setTimerAndShow() {
    timerTextEl.textContent = secondsLeft + "seconds Left";
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerTextEl.textContent = secondsLeft + "seconds Left";
    } else {
        clearPreviousTimer();
        timerTextEl.textContent = timerCompletedText;
    }
}