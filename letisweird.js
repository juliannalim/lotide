const name = "Karl Chvojka";

let color = "blue";

let color = "Purple";
console.log(name) // Karl Chvojka
console.log(color) // purple.

// Global Scope

function stuff(theColor) {
  // Block Scope => function stuff
  let color = theColor;

  return color;
}

function addition(num1, num2) {
  return num1 + num2;
}

let sum = addition(2, 1) + 4;

console.log('the stuff equals ' + sum); // "the stuff equals 7"

let color = stuff("black");
// color "black"