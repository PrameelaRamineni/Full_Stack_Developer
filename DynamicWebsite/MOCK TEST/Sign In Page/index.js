let inputEl=document.getElementById("inputElement");
let passwordEl=document.getElementById("passwordElement");
let messageText=document.getElementById("messageText");

function signIn(){
    if (inputEl.value===""){
        messageText.textContent="Please Enter Username";
    }else if (passwordEl.value===""){
        messageText.textContent="Please Enter Password";
    }else{
        messageText.textContent="Welcome";
    }
}