let userInputEl=document.getElementById("userInput");
let keydownCounterEl=document.getElementById("keydownCounter");
let keydownCodeEl=document.getElementById("keydownCode");
let count=0;

userInputEl.addEventListener("keydown",function(event){
    count+=1;
    keydownCounterEl.textContent=count;
    keydownCodeEl.textContent=event.keyCode;
});