"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {
  const inputString = readLine();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  /* Write your code here */
  let startWithVowel=false;
  const newStr=inputString.toLowerCase();
  for(let letter of vowels){
      const result=newStr.startsWith(letter);
      if(result){
          startWithVowel=true;
      }
  }
  if(startWithVowel){
      console.log(startWithVowel);
  }
  else
  {
      console.log(false);
  }
}
