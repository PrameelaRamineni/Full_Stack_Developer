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
  const inputString = readLine();
  const separator = readLine();
  const replaceString = readLine();
  /* Write your code here */
  let splittedString=inputString.split(separator);
  let res=[];
  for (let each of splittedString){
      if (each.length>7){
          res.push(replaceString);
      }
      else{
          res.push(each);
      }
  }
  console.log(...res);
}
