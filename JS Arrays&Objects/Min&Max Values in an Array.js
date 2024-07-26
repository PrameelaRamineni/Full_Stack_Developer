"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function findMinAndMaxValuesInArray(arr) {
  /* Write your code here */
  let min=arr[0],max=arr[0];
  arr.map((e)=>{
      if (e<min) min=e 
      if (e>max) max=e
  })
  return {'min': min,'max': max}
}

/* Please do not modify anything below this line */

function main() {
  let myArray = JSON.parse(readLine());

  console.log(findMinAndMaxValuesInArray(myArray));
}
