// Higher Order Functions!
// A function that takes a callback to work
// A function that returns a function definition

const generateJokeHelpers = (client) => {
  // CLIENT EXISTS
  // fetchAllJokes, insertJoke, fetchJokeById are built/defined in the scope/context of generateJokeHelpers

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

  return {
    fetchAll: fetchAllJokes,
    fetchById: fetchJokeById,
    insert: insertJoke,
  };
};

module.exports = generateJokeHelpers;
