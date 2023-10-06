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
  // minutes
  let minutes = parseInt(readLine());

  // Write your code here and return the output
function convertMinutesToSeconds(){
    convertMinutesToSeconds=minutes * 60;
    return convertMinutesToSeconds;
}
  let result = convertMinutesToSeconds(minutes);
  console.log(result);
}
