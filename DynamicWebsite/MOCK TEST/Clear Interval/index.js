let clearCountEl = document.getElementById("clearCount");
let counterEl = document.getElementById("counter");
let count = 0;
let counterElId = setInterval(function(){
    count+= 1;
    counterEl.textContent = count;
}, 1000);
clearCountEl.onclick = function(){
    clearInterval(counterElId);
}