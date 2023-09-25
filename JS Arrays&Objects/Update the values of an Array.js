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
  // index
  let index = parseInt(readLine());
  // val
  let val = parseInt(readLine());
  // myArray
  let myArray = [25, 50, "center", 75, 100];

  /*
   * Write your code here and log the output.
   */
   myArray[index]=val;
   console.log(myArray);
}
