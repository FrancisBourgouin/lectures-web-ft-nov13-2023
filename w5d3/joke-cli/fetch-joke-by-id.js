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

const fetchJokeById = (id) => {
  const queryString = `
  SELECT 
    jokes.*,
    authors.name AS author_name,
    authors.funny AS author_funny,
    authors.description AS author_description
  FROM jokes
  JOIN authors
    ON jokes.author_id = authors.id
  WHERE
    jokes.id = $1
;
  `;
  const queryArgs = [id];
  return client.query(queryString, queryArgs).then((res) => res.rows[0]);
};

const id = process.argv[2];

client
  .connect()
  .then(() => fetchJokeById(id))
  .then(createJokeElement)
  .catch((err) => console.log(err))
  .finally(() => client.end());

Promise.all([fetchJokeById(id), fetchJokeById(id), fetchJokeById(id)]);

const asyncRun = async () => {
  try {
    await client.connect();

    const joke1 = await fetchJokeById(id);
    const joke2 = await fetchJokeById(id);
    const joke3 = await fetchJokeById(id);

    createJokeElement(joke);
  } catch (err) {
    console.log(err);
  }

  await client.end();
};
