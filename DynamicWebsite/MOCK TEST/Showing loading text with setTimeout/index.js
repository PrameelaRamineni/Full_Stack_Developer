let buttonEl=document.getElementById("button");

buttonEl.onclick=function(){
    buttonEl.textContent="Loading...";
    setTimeout(function(){
        buttonEl.textContent="Show Loading 1 sec";
    },1000);
}