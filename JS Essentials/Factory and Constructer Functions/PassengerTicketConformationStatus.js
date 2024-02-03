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

/* Please do not modify anything above this line */

function createPassengerTicket(name, isTicketConfirmed) {
  /*
   * Write your code here and return output.
   */
   return{
       name:name,
       isTicketConfirmed:isTicketConfirmed,
       
   };
}

/* Please do not modify anything below this line */

function main() {
  let firstPassengerName = readLine();
  let firstPassengerTicketStatus = JSON.parse(readLine());
  let secondPassengerName = readLine();
  let secondPassengerTicketStatus = JSON.parse(readLine());

/* Please do not modify anything above this line */ 
  
  /*
   * Write your code here and log the output.
   */
   let res1=createPassengerTicket(firstPassengerName,firstPassengerTicketStatus);
   let res2=createPassengerTicket(secondPassengerName,secondPassengerTicketStatus);
   console.log(res1);
   console.log(res2);
}
