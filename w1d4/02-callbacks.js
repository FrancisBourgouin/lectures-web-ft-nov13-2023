// Higher Order Functions

// Expect listOfNames to be an array
// Expect action to be a function
// Higher Order Function (HOF)
// A function that needs another function to work
// A function that will return a function
const moreNames = ["Jan", "Eghosa", "Emmanuel", "Abdi"];
const evenMoreNames = ["Yusuf", "Victoria"];
const sayGoodMorning = (name) => console.log(`Good morning ${name}`);
const sayYo = (name) => console.log(`yo yo yo ${name}`);

const doSomethingToEveryone = function (listOfNames, action) {
  for (const name of listOfNames) {
    action(name);
  }
};

// doSomethingToEveryone is a higher order function (HOF), sayGoodMorning is THE callback of this HOF
doSomethingToEveryone(moreNames, sayGoodMorning);
doSomethingToEveryone(moreNames, sayYo);

doSomethingToEveryone(evenMoreNames, sayYo);
// ["Yusuf", "Victoria"] is the array with no name, for a few lists more, anonymous array

// Callbacks

// x = 5
// y + 5 = 12
// y = 7

const anotherDoSomethingToEveryone = function (listOfNames, action) {
  for (let i = 0; i < listOfNames.length; i++) {
    const value = listOfNames[i];

    action(value, i, listOfNames);
  }
};

// anotherDoSomethingToEveryone(evenMoreNames, (name, lastName) =>
//   console.log(`My name is ${name} ${lastName}`)
// );
anotherDoSomethingToEveryone(evenMoreNames, (name, index) =>
  console.log(`Student at index ${index}, ${name} is here`)
);

evenMoreNames.forEach((name, index) =>
  console.log(`Student at index ${index}, ${name} is here`)
);

const listOfNumbers = [1, 1337, 42, 9001];

const createANewArrayOutOfSomeAction = (listOfNumbers, action) => {
  const buffer = [];
  for (let i = 0; i < listOfNumbers.length; i++) {
    const value = listOfNumbers[i];

    const result = action(value, i, listOfNumbers);

    buffer.push(result);
  }
  return buffer;
};

const newArray = createANewArrayOutOfSomeAction(
  listOfNumbers,
  (number, index) => number * index
);

console.log(newArray);

const newArrayAgain = listOfNumbers.map((number, index) => number * index);

const newArrayAgain2 = listOfNumbers.map(function (number, index) {
  return number * index;
});
