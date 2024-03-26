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
  const isSticksFound = JSON.parse(readLine());
  const isLighterFound = JSON.parse(readLine());

  /* Write your code here */
  const gatherSticks=()=>{
      return new Promise((resolve,reject)=>{
          isSticksFound?resolve("Sticks Gathered"):reject("Sticks Not Found");
      });
  };
  const arrangeSticks=()=>{
      return new Promise((resolve,reject)=>{
          resolve("Sticks Arranged");
      });
};
const lightCampfire=()=>{
      return new Promise((resolve,reject)=>{
          isLighterFound?resolve("Campfire Lighted"):reject("Lighter Not Found");
      });
  };
  
 const myPromise=async()=>{
     try{
         const firstTask=await gatherSticks();
         console.log(firstTask);
         
         const secondTask=await arrangeSticks();
         console.log(secondTask);
         
         const thirdTask=await lightCampfire();
         console.log(thirdTask);
     }
     catch(error){
         console.log(error);
     }
 };
myPromise();
 } 
