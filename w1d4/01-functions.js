// Why are functions useful?

// Less repetition (DRY code)
// Legibility

// const a = (num) => num % 2 === 0;
// const checkIfEven = (num) => num % 2 === 0;

// if (checkIfEven(5)) {

// }

const sayGoodMorning = function () {
  console.log("Good morning Andrii");
};

sayGoodMorning();

const sayGoodMorningButBetter = function (name) {
  console.log(`Good morning ${name}`);
};
const sayByeButBetter = function (name) {
  console.log(`Bye bye ${name}`);
};

sayGoodMorningButBetter("Jill");
const names = ["Tejasva", "Yoonjoo", "Joseph", "Eghosa"];

const sayGoodMorningToEveryone = function (listOfNames) {
  for (const name of listOfNames) {
    sayGoodMorningButBetter(name);
  }
};

sayGoodMorningToEveryone(names);

const sayByeToEveryone = function (listOfNames) {
  for (const name of listOfNames) {
    sayByeButBetter(name);
  }
};

sayByeToEveryone(names);

const saySomethingToEveryone = function (listOfNames, isGreeting) {
  let action = undefined;
  if (isGreeting) {
    action = sayGoodMorningButBetter;
  } else {
    action = sayByeButBetter;
  }

  for (const name of listOfNames) {
    action(name);
  }
};

// primitives in var => assigned
// object in var => referenced

// if(isGreeting){
//   for (const name of listOfNames) {
//     sayGoodMorningButBetter(name);
//   }
//   return
// }
// for (const name of listOfNames) {
//   sayByeButBetter(name);
// }

// // Escape hatch
// if(bad){
//   return
// }
