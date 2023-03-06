
function getStairsMovementDirection(stairNumber, isClimbingStairs) {
  if (isClimbingStairs === false && stairNumber % 2 === 0) {
    return "down"; 
  } else if (isClimbingStairs === false && stairNumber % 2 === 1){
    return "right";
  } else if(isClimbingStairs === true && stairNumber % 2 === 0) {
    return "up"; 
  } else if (isClimbingStairs === true && stairNumber % 2 === 1){
    return "right";
  }
};

function getZigZagMovementDirection(){
};

function manuallyControl() {
};

//Potion functions 

function givePotion2Answer(){
};
function givePotion3Answer(){
};
function givePotion4Answer(){
};
function givePotion5Answer(){
};
function givePotion6Answer(){
};
function givePotion7Answer(){
};
function givePotion8Answer(){
};
function givePotion9Answer(){
};
function givePotion10Answer(){
};
function givePotion11Answer(){
};
function givePotion12Answer(){
};

// Potion functions ^


function level7Move() {
};

function hasMovedToTile(){
};

function level8Move() {
};

// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "getStairsMovementDirection", content: getStairsMovementDirection, type: "function" },
    { name: "getZigZagMovementDirection", content: getZigZagMovementDirection, type: "function" },
    { name: "manuallyControl", content: manuallyControl, type: "function" },
    { name: "givePotion2Answer", content: givePotion2Answer, type: "function" },
    { name: "givePotion3Answer", content: givePotion3Answer, type: "function" },
    { name: "givePotion4Answer", content: givePotion4Answer, type: "function" },
    { name: "givePotion5Answer", content: givePotion5Answer, type: "function" },
    { name: "givePotion6Answer", content: givePotion6Answer, type: "function" },
    { name: "givePotion7Answer", content: givePotion7Answer, type: "function" },
    { name: "givePotion8Answer", content: givePotion8Answer, type: "function" },
    { name: "givePotion9Answer", content: givePotion9Answer, type: "function" },
    { name: "givePotion10Answer", content: givePotion10Answer, type: "function" },
    { name: "givePotion11Answer", content: givePotion11Answer, type: "function" },
    { name: "givePotion12Answer", content: givePotion12Answer, type: "function" },
    { name: "level7Move", content: level7Move, type: "function" },
    { name: "level8Move", content: level8Move, type: "function" },
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };