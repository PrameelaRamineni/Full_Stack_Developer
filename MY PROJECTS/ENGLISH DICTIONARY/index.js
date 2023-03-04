
const inputEl=document.getElementById("input");
const paraEl=document.getElementById("para");
const meaningContainerEl=document.getElementById("meaning-container");
const titleEl=document.getElementById("title");
const meanEl=document.getElementById("mean");
const audioEl=document.getElementById("audio");

async function fetchAPI(word){
    try{
        paraEl.style.display="block";
        meaningContainerEl.style.display="none";

        paraEl.innerText=`Searching the meaning of "${word}"`;
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result=await fetch(url).then((res)=>
        res.json());

        if(result.title){
            meaningContainerEl.style.display="block";
            titleEl.innerText=word;
            meanEl.innerText="N/A";
            audioEl.style.display="none";
            
        }else{
        paraEl.style.display="none"; 
        meaningContainerEl.style.display="block";
        audioEl.style.display="inline-flex";
        titleEl.innerText=result[0].word;
        meanEl.innerText=result[0].meanings[0].definitions[0].definition;
        audioEl.src=result[0].phonetics[0].audio;
        }
    }catch(error){
      console.log(error);
      paraEl.innerText=`an error happened,try again later`;
    }
}

inputEl.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key ==="Enter"){
        fetchAPI(e.target.value)
    }
});