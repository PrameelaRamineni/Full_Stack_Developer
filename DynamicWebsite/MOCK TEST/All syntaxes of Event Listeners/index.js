let messageEl=document.getElementById("message");
let onEventListenerBtnEl=document.getElementById("onEventListenerBtn");
let addEventListenerBtnEl=document.getElementById("addEventListenerBtn");

function inlineEventListener(){
    messageEl.textContent="Inline event listener";
}
onEventListenerBtnEl.onclick=function(){
    messageEl.textContent="onevent listener";
}

addEventListenerBtnEl.addEventListener("click",function(){
    messageEl.textContent="addEventListener";
})