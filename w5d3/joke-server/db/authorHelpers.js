const generateAuthorHelpers = (client) => {
  const fetchAllAuthors = () => {
    const queryString = `
    SELECT 
      *
    FROM authors
    ;
    `;
    return client.query(queryString).then((res) => res.rows);
  };

  return { fetchAll: fetchAllAuthors };
};

module.exports = generateAuthorHelpers;
