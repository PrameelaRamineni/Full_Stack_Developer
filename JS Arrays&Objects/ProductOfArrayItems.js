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
  let integers = JSON.parse(readLine());

  /* Please do not modify anything above this line */

  /* Write your code here and log the output */
  let res=integers.reduce((previousValue, currentValue)=>previousValue*currentValue,1);
  console.log(`${integers[0]} * ${integers[1]} * ${integers[2]} = ${res}`);
}
