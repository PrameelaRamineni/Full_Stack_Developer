let interestsContainer=document.getElementById("interestsContainer");
let breakEl=document.createElement("br");
let headingEl=document.createElement("h1");
headingEl.textContent="Choose your interests";

let musicEl=document.createElement("input");
musicEl.setAttribute("type","checkbox");
musicEl.id="music";
let musiclabel=document.createElement("label");
musiclabel.setAttribute("for","music");
musiclabel.textContent="Music";
interestsContainer.appendChild(headingEl);
interestsContainer.appendChild(musicEl);
interestsContainer.appendChild(musiclabel);
interestsContainer.appendChild(breakEl);

let danceEl=document.createElement("input");
danceEl.setAttribute("type","checkbox");
danceEl.id="dance";
let dancelabel=document.createElement("label");
dancelabel.htmlFor="dance";
dancelabel.textContent="Dance";
interestsContainer.appendChild(danceEl);
interestsContainer.appendChild(dancelabel);