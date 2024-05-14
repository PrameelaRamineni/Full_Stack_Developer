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
  const isGrassTrimmerFound = JSON.parse(readLine());
  const isWaterHosePipeFound = JSON.parse(readLine());
/* Write your code here */
  const grassTrimmed=()=>{
    return new Promise((resolve,reject)=>{
        isGrassTrimmerFound?resolve("Grass Trimmed"):reject("Grass Trimmer Not Found");
    });
  };
  const cleanGarden=()=>{
    return new Promise((resolve,reject)=>{
        resolve("Garden Cleaned");
    });  
  };
  const isWatered=()=>{
      return new Promise((resolve,reject)=>{
          isWaterHosePipeFound?resolve("Watered Plants"):reject("Water Hose Pipe Not Found");
      });
  };
  const myPromise = async () => {
    try {
/* Write your code here */
        const firstTask=await grassTrimmed();
        console.log(firstTask);
        const secondTask=await cleanGarden();
        console.log(secondTask);
        const thirdTask=await isWatered();
        console.log(thirdTask);
      
    } catch(error) {
/* Write your code here */
        console.log(error);
    }
  };
  
  myPromise();
}
