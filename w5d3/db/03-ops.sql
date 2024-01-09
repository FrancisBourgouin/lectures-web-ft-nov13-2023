-- Fetch all the jokes and their respective authors

SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.funny AS author_funny,
  authors.description AS author_description

FROM jokes
JOIN authors
  ON jokes.author_id = authors.id
;

-- Fetch a singular joke and author

SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.funny AS author_funny,
  authors.description AS author_description
FROM jokes
JOIN authors
  ON jokes.author_id = authors.id
WHERE
  jokes.id = 1
;

-- Fetch an author

SELECT *
FROM authors
WHERE
  authors.id = 1
;

-- Insert a joke

INSERT INTO jokes 
  (question, answer, rating, author_id)
VALUES 
  ('?', '?', 5, 1)
;
