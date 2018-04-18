const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));

const users = [
  {name: "foo", age: 31},
  {name: "bar", age: 31},
  {name: "baz", age: 31}
];

const users2 = [
  {name: "foo", age: 31},
  {name: "bar", age: 31},
  {name: "baz", age: 31},
  undefined
];

const users3 = [
  {name: {first: "foo", last: "bar"}, age: 31},
  undefined
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/users/v1", (req, res) => {
  res.json(users);
});

app.get("/users/v2", (req, res) => {
  res.json(users2);
});

app.get("/users/v3", (req, res) => {
  res.json(users3);
});

module.exports = app;