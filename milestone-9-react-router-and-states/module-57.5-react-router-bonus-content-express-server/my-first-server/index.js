const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/data", (req, res) => {
  res.send("more data coming sooooooooooooooooon");
});

app.listen(port, () => {
  console.log(`My first server  listening on port ${port}`);
});
