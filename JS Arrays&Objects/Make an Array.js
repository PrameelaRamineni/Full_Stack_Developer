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
  // num1
  let num1 = parseInt(readLine());
  // num2
  let num2 = parseInt(readLine());
  // num3
  let num3 = parseInt(readLine());

  function makeAnArray(num1,num2,num3) {
    /** Write your code here and return the output */
    return [num1,num2,num3];
  }

  let createdArray = makeAnArray(num1, num2, num3);
  console.log(createdArray);
}
