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
  const inputString = JSON.parse(readLine().replace(/'/g, '"'));

  /* Write your code here */
  const beforeTrim=inputString.length;
  const trimStr=inputString.trim();
  const afterTrim=trimStr.length;
  
  console.log(beforeTrim);
  console.log(afterTrim);
  
}
