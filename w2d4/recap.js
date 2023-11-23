const listOverNumbers = (listOfNumbers, action) => {
  for (const number of listOfNumbers) {
    action(number);
  }
};

const showTheNumber = (number) => console.log(number);
const showMultipleOfNumber = (number, multiplier) => console.log(number * multiplier);

// listOverNumbers([1, 2, 3, 4, 5], showTheNumber);

// listOverNumbers([1, 2, 3, 4, 5], (number) => showMultipleOfNumber(number, 5));

// Promises vs Callbacks
// Their pupose is the same, but different approaches

// Promises
// When we want to chain multiple operations together, or all at the same time

const promiseCallback = (resolve, reject) => {
  // resolve is when the result is good, will trigger .then
  // reject is when it's bad, will trigger .catch
};

const promise = new Promise(promiseCallback);

promise
  .then(() => console.log("success"))
  .catch(() => console.log("Fail"))
  .finally(() => console.log("Always"));

// Callbacks
// When we want to do a repetitive task and the action on the result is different
