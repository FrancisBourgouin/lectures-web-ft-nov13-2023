const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { messagesArr } = require("./data/messageData");
const { usersObj } = require("./data/userData");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/messages", (req, res) => {
  res.json(messagesArr);
});

app.post("/api/messages", (req, res) => {
  console.log(req.body);
  const { type, content, datePosted, userId } = req.body;

  const newMessage = {
    id: messagesArr.length + 1,
    type,
    content,
    datePosted,
    userId,
  };

  messagesArr.push(newMessage);

  res.json(newMessage);
});

app.get("/api/users", (req, res) => {
  res.json(usersObj);
});

module.exports = app;
