const fetchAllJokesCB = (callback) => {
  setTimeout(() => callback("DATABASE INFO"), 1000);
};

const fetchAllJokesPromises = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("DATABASE INFO"), 1000);
  });
};

fetchAllJokesCB((dbRes) => console.log(dbRes));

fetchAllJokesPromises()
  .then((dbRes) => console.log(dbRes))
  .catch((err) => console.log(err));

// Async await!

const wrapperFunction = async () => {
  try {
    const dbRes = await fetchAllJokesPromises();

    console.log(dbRes);
  } catch (err) {
    console.log(err);
  }
};

// wrapperFunction();

const addTwoNumbers = (a, b) => a + b;

const addTwoNumbersAgain = async (a, b) => a + b;

console.log(addTwoNumbers(2, 3), addTwoNumbersAgain(2, 3));

const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
res.json(rows);

db.query("SELECT * FROM users WHERE id = $1", [id]).then(({ rows }) => {
  res.json(rows);
});

// Async / Await => Promise

const steps = async () => {
  const res = await getProperties(); // Promise!
};

client.query().then().catch().finally();

const awaitContainer = async () => {
  try {
    const res = await client.query();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  // finally
};

awaitContainer();
awaitContainer();

const someFunction = async () => 5;
