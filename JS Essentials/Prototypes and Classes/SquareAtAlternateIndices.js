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
  const myArray = JSON.parse(readLine());
  /* Write your code here */
  let count=0;
  let res=myArray.map((number)=>{
      if (count%2==0){
          count+=1;
          return number*number;
      }
      else{
          count+=1;
          return number;
      }
    });
    console.log(res);
}
