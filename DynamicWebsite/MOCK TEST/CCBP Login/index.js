let myFormEl=document.getElementById("myForm");
let nameEl=document.getElementById("name");
let nameErrMsgEl=document.getElementById("nameErrMsg");
let passwordEl=document.getElementById("password");
let passwordErrMsgEl=document.getElementById("passwordErrMsg");
let resultMsgEl=document.getElementById("resultMsg");
let submitButton=document.getElementsByClassName("submit-button");

nameEl.addEventListener("blur",function(){
    if(nameEl.value===""){
        nameErrMsgEl.textContent="Required*";
    }else{
        nameErrMsgEl.textContent="";
    }
});
passwordEl.addEventListener("blur",function(){
    if(passwordEl.value===""){
        passwordErrMsgEl.textContent="Required*";
    }else{
        passwordErrMsgEl.textContent="";
    }
});

myFormEl.addEventListener("submit",function(event){
    event.preventDefault();
    if(nameEl.value!==""& passwordEl.value!==""){
        resultMsgEl.textContent="Login Success";
    }else if(nameEl.value===""){
        resultMsgEl.textContent="Fill in the required details";
        nameErrMsgEl.textContent="Required*";
        passwordErrMsgEl.textContent="Required*";
    }else if(nameEl.value===""){
        resultMsgEl.textContent="Fill in the required details";
        nameErrMsgEl.textContent="Required*";
    }else if(passwordEl.value===""){
        resultMsgEl.textContent="Fill in the required details";
        passwordErrMsgEl.textContent="Required*";
    }
});