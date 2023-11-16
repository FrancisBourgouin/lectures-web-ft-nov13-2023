// Existential questions!

// Nested objects, why nesting?

// Looping!

// C-Style for loop

const someArray = [9001, 42, 1337, 1];

for (let i = 0; i < someArray.length; i++) {
  const number = someArray[i];
  console.log(number);
}

// For the element of a list
for (const number of someArray) {
  console.log(number);
}

// For the keys in an object
for (const key in someArray) {
  console.log(key);
}

// Functions!

// Function expression
const someFunction = function () {
  console.log("Good morning!");
};

// Function definition
// Is hoisted
someOtherFunction();

function someOtherFunction() {
  console.log("Hello there");
}

// Function expression, Arrow style

const someArrowFunction = () => {
  console.log("I'M AN ARROW NOW");
  console.log("hehehe");
};

const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
const addTwoNumbersButBetter = (num1, num2) => num1 + num2;

//
//
//
//
//

// function someOtherFunction() {
//   console.log("MWAHAHAHAHAHA");
// }
