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

function main() {
  // myArray
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));

  //Write your code here and log the output.
  let sum=0;
  for(let num of myArray){
      sum=sum+num;
}
console.log(sum);
}
