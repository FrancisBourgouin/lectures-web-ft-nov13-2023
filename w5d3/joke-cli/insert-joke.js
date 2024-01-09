const { Client } = require("pg");

const client = new Client({
  user: "francis",
  host: "localhost",
  database: "nov_jokes",
  password: "francis",
  port: 5432,
});

const insertJoke = (question, answer, rating, authorId) => {
  const queryString = `
  INSERT INTO jokes 
    (question, answer, rating, author_id)
  VALUES 
    ($1, $2, $3, $4)
  RETURNING *
  ;
  `;
  const queryArgs = [question, answer, rating, authorId];
  return client.query(queryString, queryArgs).then((res) => res.rows[0]);
};

// const question = process.argv[2]
// const answer = process.argv[3]
// const rating = process.argv[4]
// const authorId = process.argv[5]

const [, , question, answer, rating, authorId] = process.argv;

client
  .connect()
  .then(() => insertJoke(question, answer, rating, authorId))
  .then(console.log)
  .catch((err) => console.log(err))
  .finally(() => client.end());
