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

class Submarine {
  constructor(totalTorpedos,torpedosFired) {
    this.isSubmerged = false;
    this.totalTorpedos=totalTorpedos;
    this.torpedosFired=torpedosFired;
  }

  /* Write your code here */
  dive(){
      this.isSubmerged=true;
      console.log("Submarine Submerged")
  }
  surface(){
      this.isSubmerged=false;
      console.log("Submarine Surfaced");
  }
  fireTorpedos(){
      this.isSubmerged=false;
      console.log(`${this.torpedosFired} Torpedos Fired, ${this.totalTorpedos-this.torpedosFired} Left`);
  }
  
}

class WeaponUnit extends Submarine {
  
  /* Write your code here */
  dive(){
      super.dive();
  }
  surface(){
      super.surface();
  }
  fireTorpedos(){
      super.fireTorpedos();
  }

}

/* Please do not modify anything below this line */

function main() {
  const totalTorpedos = parseInt(readLine());
  const torpedosFired = parseInt(readLine());  
  
  const weaponUnit1 = new WeaponUnit(totalTorpedos, torpedosFired);
  
  weaponUnit1.dive();
  weaponUnit1.fireTorpedos();
  weaponUnit1.surface();
}