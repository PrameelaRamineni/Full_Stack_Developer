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
  let numbersArray = JSON.parse(readLine());

/* Please do not modify anything above this line */

  /*
   * Write your code here and log the output.
   */
    let [a, b, ...rest] = numbersArray;
    let sum=0;
    for(let eachnumber of rest){
        sum+=eachnumber;
    }
    console.log(sum);
}
