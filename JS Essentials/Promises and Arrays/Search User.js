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
  const userName = readLine();
  const users = ["Abhiram", "Gabrill", "Mosh", "Alia", "Rehman", "Manoj"];
  
  /* Write your code here */
  const searchUser=()=>{
      return new Promise((resolve,reject)=>{
          let isUserFound=users.includes(userName);
          if(isUserFound){
              resolve("User Found");
          }
          else{
              reject("User Not Found");
          }
      });
  };
  const myPromise=async()=>{
      try{
          const res=await searchUser();
          console.log(res);
      }
      catch(error){
          console.log(error);
  }
  };
  myPromise();
  
}
