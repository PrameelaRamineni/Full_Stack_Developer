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

function ArithmeticOperations(firstNumber, secondNumber) {
  this.firstNumber = firstNumber;
  this.secondNumber = secondNumber;
}

function main() {
  const firstNumber = JSON.parse(readLine());
  const secondNumber = JSON.parse(readLine());
  
  const operation1 = new ArithmeticOperations(firstNumber, secondNumber);

  /* Write your code here */
  operation1.ratioOfNumbers=function(){
      return this.firstNumber/this.secondNumber;
  };
  operation1.sumOfCubesOfNumbers=function(){
      return this.firstNumber**3+this.secondNumber**3;
  };
  operation1.productOfSquaresOfNumbers=function(){
      return this.firstNumber**2 * this.secondNumber**2;
  };

  console.log(operation1.ratioOfNumbers());
  console.log(operation1.sumOfCubesOfNumbers());
  console.log(operation1.productOfSquaresOfNumbers());
}