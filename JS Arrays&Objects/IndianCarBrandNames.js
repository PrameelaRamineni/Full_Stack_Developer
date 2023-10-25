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
  // arrayOfCarBrands
  let arrayOfCarBrands = JSON.parse(readLine().replace(/'/g, '"'));

  //Write your code here and log the output.
  let arrayOfIndianCarBrandNames = [];     //taking an empty array

 for (let carBrand of arrayOfCarBrands) {  //using loops to iterate over the objects of array
  let eachCarBrandCountry = carBrand.country;  //accessing the key 'country' of each object

  //checking if each brand country is 'India'. 
  if (eachCarBrandCountry === "India") { 
   //if the brand country is 'India' pushing the name of the car brand name into empty array that was created
   let nameOfCarBrand = carBrand.name;
   arrayOfIndianCarBrandNames.push(nameOfCarBrand);  
  }
 }
 //logging the final array in the console
 console.log(arrayOfIndianCarBrandNames);
}
