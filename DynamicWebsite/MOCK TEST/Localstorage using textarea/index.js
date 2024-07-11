let inputText=document.getElementById("inputText");

saveButton.onclick=function(){
    let textValue=inputText.value;
    if (textValue===""){
        textValue=localStorage.getItem("yourStory",textValue);
    }else{
        textValue=localStorage.setItem("yourStory",textValue);
    }
}