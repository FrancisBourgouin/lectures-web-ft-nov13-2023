// Callback (old and annoying)
// Promise way (Chain partay)
// Async / Await way (Cool, but at the same kinda annoying + false representation)

// const createConnection = async () => {
//   const client = new Client();
//   await client.connect();
// };

// const fetchTime = async () => {
//   const res = await client.query("SELECT NOW()");
//   console.log(res);
// };

// const runTheQuery = async () => {
//   await createConnection();

//   await fetchTime();

//   await client.end();
// };

// CJS vs ESM

const { Client } = require("pg");

const client = new Client({
  user: "francis",
  host: "localhost",
  database: "nov_jokes",
  password: "francis",
  port: 5432,
});

const createJokeElement = (jokeObj) => {
  console.log("\n***************");
  console.log(`Joke #${jokeObj.id}`);
  console.log(`Q: ${jokeObj.question}`);
  console.log(`A: ${jokeObj.answer}`);
  console.log(`By: ${jokeObj.author_name}`);
  console.log("***************\n");
};

const showAllJokes = (jokeList) => jokeList.forEach(createJokeElement);

const fetchAllJokes = () => {
  const queryString = `
  SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.funny AS author_funny,
  authors.description AS author_description
  FROM jokes
  JOIN authors
  ON jokes.author_id = authors.id
  ;
  `;
  return client.query(queryString).then((res) => res.rows);
};

client
  .connect()
  .then(fetchAllJokes)
  .then(showAllJokes)
  .catch((err) => console.log(err))
  .finally(() => client.end());
