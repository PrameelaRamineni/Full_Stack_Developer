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

function Ride(fare, distance) {
  /* Write your code here */
  this.fare=fare;
  this.distance=distance;
  this.getFarePerKilometer=()=>{
      return this.fare/this.distance;
  };

}

/* Please do not modify anything below this line */

function main() {
  const fare = JSON.parse(readLine());
  const distance = JSON.parse(readLine());
  
  const ride1 = new Ride(fare, distance);
  
  console.log(ride1.getFarePerKilometer());
}