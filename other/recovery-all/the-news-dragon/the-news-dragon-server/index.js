const express = require("express");
var cors = require("cors");
var app = express();

const categories = require("./data/categories.json");

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
