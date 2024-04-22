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
  const integers = JSON.parse(readLine());

  /* Write your code here */
  let sumOfValues=0;
  integers.forEach((value,index)=>{
      if(index%2===0){
          sumOfValues=sumOfValues+value;
      }
  });
  const lengthOfArray=integers.length;
  const evenIndices=Math.ceil(lengthOfArray/2);
  const average=sumOfValues/evenIndices;
  
  console.log(average);
}
