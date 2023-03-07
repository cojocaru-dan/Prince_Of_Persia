// getStairsMovementDirection
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

// getZigZagMovementDirection
function getZigZagMovementDirection(step){
  // if(step == 0){
  //   return "up";
  // }else if (step >= 1 && step <= 2) {
  //   return "right";
  // } else if(step == 3){
  //   return "down";
  // }else if(step >= 4 && step <=5){
  //   return "right";
  // }else if(step == 6){
  //   return "up";
  // }else if(step >= 7 && step <= 8){
  //   return "right";
  // }else if(step == 9){
  //   return "down";
  // }

  if ([1,2,4,5,7,8].includes(step)) {
    return "right";
  }else if([3,9].includes(step)){
    return "down";
  }else 
  return "up"
};

// manuallyControl
let pressed = 0;
function manuallyControl(key) {
  if (key == "KeyQ") {
    pressed++;
  }
  
  if (pressed % 2 == 0) {
    if (key == "KeyA" ){
      moveDirection("left");
    }else if(key == "KeyW"){
      moveDirection("up");
    }else if(key == "KeyS" ){
      moveDirection("down");
    }else if(key == "KeyD" ){
      moveDirection("right");
    }
  }else { 
    if(key == "ArrowLeft" ){
      moveDirection("left");
    }else if(key == "ArrowUp"){
      moveDirection("up");
    }else if(key == "ArrowDown" ){
      moveDirection("down");
    }else if(key == "ArrowRight" ){
      moveDirection("right");
    }
  }
};

//Potion functions 

function givePotion2Answer(list){
  let sum = 0;
  for (const number of list){
    if (number % 2 === 0){
      sum += number;
    }
  }
  return sum;
};

function givePotion3Answer(arr){
  let num = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]){
      num = arr[i];
    }
  }
  return num;
};

function givePotion4Answer(x, y){
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (y.includes(x[i])) {
      result += x[i].toUpperCase();
    } else {
      result += x[i];
    }
  }
  return result;
}

function givePotion5Answer(hours, minutes, seconds, secondsToAdd){
  seconds += secondsToAdd;
  if (seconds > 59) {
    seconds -= 60;
    minutes += 1;
  }
  if (minutes > 59) {
    minutes -= 60;
    hours += 1
  }
  if(hours > 23) {
    hours = 0;
  }
  return `${hours}:${minutes}:${seconds}`;
}

function givePotion6Answer(input){
  let numbers = input.split("*");
  let sum = 0;
  for (const item of numbers) {
    if (typeof Number(item) === "number") {
      sum += Number(item);
    }
  }
  return sum;
}

function givePotion7Answer(txt){
  let splitTxt = txt.split("");
  let sum = 0;
  for (let i = 0; i < splitTxt.length; i++) {
    if (txt[i] === "number") {
      sum += parseInt(txt[i]);
    }
    }
    return sum;
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