const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { Client } = require("pg");

const client = new Client({
  user: "francis",
  host: "localhost",
  database: "nov_jokes",
  password: "francis",
  port: 5432,
});
client.connect();

const generateJokeHelpers = require("./db/jokeHelpers");

const jokes = generateJokeHelpers(client);

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ROUTES HERE

app.get("/api/jokes", (req, res) => {
  jokes
    .fetchAll()
    .then((jokes) => res.json(jokes))
    .catch((err) => {
      console.log(err);
      res.json("OH NO");
    });
});

app.get("/api/jokes/:joke_id", (req, res) => {
  const jokeId = req.params.joke_id;

  jokes
    .fetchById(jokeId)
    .then((joke) => res.json(joke))
    .catch((err) => {
      console.log(err);
      res.json("OH NO");
    });
});

app.get("/jokes", (req, res) => {
  jokes
    .fetchAll()
    .then((jokes) => {
      const templateVars = { jokes };
      res.render("jokes", templateVars);
    })
    .catch((err) => {
      console.log(err);
      res.json("OH NO");
    });
});

app.get("/jokes/:joke_id", (req, res) => {
  const jokeId = req.params.joke_id;

  jokes
    .fetchById(jokeId)
    .then((joke) => {
      const templateVars = { joke };
      res.render("joke", templateVars);
    })
    .catch((err) => {
      console.log(err);
      res.json("OH NO");
    });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
