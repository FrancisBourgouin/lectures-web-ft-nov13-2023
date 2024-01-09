const { Client } = require("pg");

const client = new Client({
  user: "francis",
  host: "localhost",
  database: "nov_jokes",
  password: "francis",
  port: 5432,
});

const fetchAllAuthors = () => {
  const queryString = `
  SELECT 
    *
  FROM authors
  ;
  `;
  return client.query(queryString).then((res) => res.rows);
};

client
  .connect()
  .then(fetchAllAuthors)
  .then(console.log)
  .catch((err) => console.log(err))
  .finally(() => client.end());
