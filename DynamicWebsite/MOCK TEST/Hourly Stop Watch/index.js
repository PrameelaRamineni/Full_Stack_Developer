let minutesEl=document.getElementById("minutes");
let startBtnEl=document.getElementById("startBtn");
let stopBtnEl=document.getElementById("stopBtn");
let secondsEl=document.getElementById("seconds");

let startCount;
let minCount=0;
let secCount=0;
startBtnEl.onclick=function(){
    startCount=setInterval(function(){
        secCount+=1;
        if(secCount<10){
            secondsEl.textContent="0"+secCount;
        }else{
            secondsEl.textContent=secCount;
        }
        if(secCount===60){
            secCount=0;
            minCount+=1;
            minutesEl.textContent=minCount;
        }
    },1000);
}
stopBtnEl.onclick=function(){
    clearInterval(startCount);
}