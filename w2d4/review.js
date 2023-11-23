// Callbacks
// Cleaner code / DRYer code, less repeating

// net package

// connect("...", (err, data) => {
//   // ...
// });

// Can callbacks be used in synchronous code

[1, 2, 3].forEach((number) => console.log(number));

// Asynchronous code, always needs a callback

// console.log("Hello!");

// setTimeout(() => {
//   console.log("How are you?");
// }, 1000);

// console.log("Bye!");

// Fire console.log
// Fire setTimeout => Start a timer of 1s, and then, run callback (EVENT LOOP)
// Fire console.log

const logSomething = () => {
  console.log("How are you?");
};
// Log something, is a function (arrow expression)

setTimeout(logSomething, 1000);

const addTwoNumbers = (a, b) => a + b;

const logSomethingElse = () => {
  console.log("How are you?");
};
// logSomethingElse, is undefined

setTimeout(logSomethingElse, 1000);
