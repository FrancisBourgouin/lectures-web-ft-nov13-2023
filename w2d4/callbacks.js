// Making soup!

// boilBroth
// addNoodles
// addVeggies
// addEggs

const boilBroth = (timeInSeconds) => {
  const isSuccess = Math.random() > 0.5;

  setTimeout(() => {
    if (isSuccess) {
      return console.log("Broth smells great!");
    }

    // (╯°□°）╯︵ ┻━┻
    throw new Error("Oh my gosh broth smells like a garbage fire.");
  }, 1000 * timeInSeconds);
};

const addNoodles = () => {
  const isSuccess = Math.random() > 0.5;

  setTimeout(() => {
    if (isSuccess) {
      return console.log("Happy noodles");
    }

    // (╯°□°）╯︵ ┻━┻
    throw new Error("Oh no. Noodles all stuck to the bottom");
  }, 1000);
};

// const bob = "Robert";

// bob = "Roberto"; // Throwing an error (Exceptions)

// try {
//   boilBroth(2);
//   addNoodles();
// } catch (error) {
//   console.log("Welp, let's try again.");
//   console.log(error.message);
// }

const boilBrothV2 = (timeInSeconds, doSomething) => {
  const isSuccess = Math.random() > 0.5;
  setTimeout(() => {
    try {
      if (isSuccess) {
        return doSomething("Broth smells great!");
      }

      // (╯°□°）╯︵ ┻━┻
      throw new Error("Oh my gosh broth smells like a garbage fire.");
    } catch (error) {
      console.log("Welp, let's try again.");
      console.log(error.message);
    }
  }, 1000 * timeInSeconds);
};

const addNoodlesV2 = (doSomething) => {
  const isSuccess = Math.random() > 0.5;

  setTimeout(() => {
    try {
      if (isSuccess) {
        return doSomething("Happy noodles");
      }

      // (╯°□°）╯︵ ┻━┻
      throw new Error("Oh no. Noodles all stuck to the bottom");
    } catch (error) {
      console.log("Welp, let's try again.");
      console.log(error.message);
    }
  }, 1000);
};

const addVeggies = () => {
  const isSuccess = Math.random() > 0.5;

  setTimeout(() => {
    try {
      if (isSuccess) {
        return console.log("Happy veggies");
      }

      // (╯°□°）╯︵ ┻━┻
      throw new Error("Oh no. Veggies flew all over the kitchen");
    } catch (error) {
      console.log("Welp, let's try again.");
      console.log(error.message);
    }
  }, 1000);
};

boilBrothV2(2, (message) => {
  console.log(message);

  addNoodlesV2((message) => {
    console.log(message);
    addVeggies();
  });
});

const addNoodlesOrSomethingElse = (doSomething) => {
  const isSuccess = Math.random() > 0.5;

  setTimeout(() => {
    try {
      if (isSuccess) {
        return doSomething(null, "Happy noodles");
      }

      // (╯°□°）╯︵ ┻━┻
      throw new Error("Oh no. Noodles all stuck to the bottom");
    } catch (error) {
      return doSomething(error, "Welp didn't work out");
    }
  }, 1000);
};

addNoodlesOrSomethingElse((err, message) => {
  if (err) {
    return console.log(err.message);
  }

  return console.log(message);
});

const addNoodlesForkInTheRoad = (doSomethingIfSuccessful, doSomethingIfFailure) => {
  const isSuccess = Math.random() > 0.5;

  setTimeout(() => {
    try {
      if (isSuccess) {
        return doSomethingIfSuccessful("Happy noodles");
      }

      // (╯°□°）╯︵ ┻━┻
      throw new Error("Oh no. Noodles all stuck to the bottom");
    } catch (error) {
      return doSomethingIfFailure(error.message);
    }
  }, 1000);
};

addNoodlesForkInTheRoad(
  (message) => {
    console.log("message");
    console.log("next step");
  },
  (error) => {
    console.log("error", error);
  }
);
