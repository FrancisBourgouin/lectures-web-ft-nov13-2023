// Promises !

// new Promise

// What is a promise ?

// Something that will happen later
// Fulfilled
// Broken
// End at one point

// const somePromise = new Promise((resolve, reject) => {
//   const isSuccess = Math.random() > 0.2;
//   if (isSuccess) {
//     return resolve("Yay party time!");
//   }
//   return reject("Nay! Sad times :(");
// });

// somePromise
//   .then((successMessage) => console.log(successMessage)) // Runs when resolve is called
//   .catch((errorMessage) => console.log(errorMessage)) // Runs when reject is called
//   .finally(() => console.log("The promise is done")); // Runs when everything is done (whichever resolve/reject)

const boilBrothPromise = (timeInSeconds) => {
  const isSuccess = Math.random() > 0.2;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (isSuccess) {
          return resolve("Broth smells great!");
        }

        // (╯°□°）╯︵ ┻━┻
        throw new Error("Oh my gosh broth smells like a garbage fire.");
      } catch (error) {
        reject(error.message);
      }
    }, 1000 * timeInSeconds);
  });
};

const addVeggiesPromise = () => {
  const isSuccess = Math.random() > 0.2;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (isSuccess) {
          return resolve("Happy veggies!");
        }

        // (╯°□°）╯︵ ┻━┻
        throw new Error("Oh my gosh veggies smells like a garbage fire.");
      } catch (error) {
        reject(error.message);
      }
    }, 1000);
  });
};

const addNoodlesPromise = () => {
  const isSuccess = Math.random() > 0.2;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (isSuccess) {
          return resolve("Happy noodles!");
        }

        // (╯°□°）╯︵ ┻━┻
        throw new Error("Oh my gosh noodles smells like a garbage fire.");
      } catch (error) {
        reject(error.message);
      }
    }, 1000);
  });
};

const addEggsPromise = () => {
  const isSuccess = Math.random() > 0.2;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (isSuccess) {
          return resolve("Happy eggs!");
        }

        // (╯°□°）╯︵ ┻━┻
        throw new Error("Oh my gosh eggs smells like a garbage fire.");
      } catch (error) {
        reject(error.message);
      }
    }, 1000);
  });
};

const showStatusReport = (message) => {
  console.log("--- Status report ---");
  console.log(message);
  console.log("--- End ---\n");
};

// boilBrothPromise(2)
//   .then(showStatusReport)
//   .then(() => {
//     console.log("We made it past the broth! YAY");
//     return addVeggiesPromise();
//   })
//   .then(showStatusReport)
//   .then(addNoodlesPromise)
//   .then(showStatusReport)
//   .then(addEggsPromise)
//   .then(showStatusReport)
//   .catch((error) => console.log(error));

// IT'S ALL OR NOTHING! OH YEAH!
Promise.all([addNoodlesPromise(), addEggsPromise(), addVeggiesPromise()])
  .then((messages) => {
    console.log(messages);
  })
  .catch((err) => console.log(err));

//
Promise.race([addNoodlesPromise(), addEggsPromise(), addVeggiesPromise()])
  .then((message) => console.log("First to finish", message))
  .catch((error) => console.log("First to fail", error));

// Read a file with an url inside it
// Request the page from that url
// Save the file with the content of the page

// fs.readFile("/someFile.txt", (err, textData) => {
//   if (err) {
//     // ...
//   }

//   request(textData, (err, requestData) => {
//     if (err) {
//       // ...
//     }

//     fs.writeFile("/newfile.txt", requestData, (err) => {
//       //
//     });
//   });
// });

// readFile("path")
//   .then((text) => requestPage(text))
//   .then((page) => writeFile(page))
//   .catch((err) => console.log(err));
