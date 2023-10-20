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
  // objectKey
  let objectKey = readLine().replace(/'/g, '"');
  // arrayOfInventions
  let arrayOfInventions = [
    {
      name: "Printing Press",
      "invented by": "Johannes Gutenberg",
      year: 1440
    },
    {
      name: "Light Bulb",
      "invented by": "Thomas Edison",
      year: 1879
    },
    {
      name: "Telephone",
      "invented by": "Alexander Graham Bell",
      year: 1876
    },
    {
      name: "Aeroplane",
      "invented by": "Orville and Wilbur Wright",
      year: 1903
    },
    {
      name: "Computer",
      "invented by": "Charles Babbage",
      year: 1822
    }
  ];

  //Write your code here and log the output.
   for(let name of arrayOfInventions){
      let eachName=name[objectKey];
      console.log(name[objectKey]);
      }
}
