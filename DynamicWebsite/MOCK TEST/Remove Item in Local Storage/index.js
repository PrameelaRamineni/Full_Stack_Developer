let inputValueEl=document.getElementById("inputValue");
let saveBtnEl=document.getElementById("saveBtn");
let resetBtnEl=document.getElementById("resetBtn");
let nameEl=document.getElementById("name");

nameEl.textContent="Varun";
nameEl.textContent=localStorage.getItem("name",inputValueEl.value);

let storeValue=localStorage.setItem("name",inputValueEl.value);
saveBtnEl.onclick=function(){
    nameEl.textContent=inputValueEl.value;
    let storeValue=localStorage.setItem("name",inputValueEl.value);
};

resetBtnEl.onclick=function(){
    localStorage.removeItem("name");
    nameEl.textContent="Varun";
};