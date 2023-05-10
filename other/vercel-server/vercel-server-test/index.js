const express = require("express");
var cors = require("cors");
var app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  res.send({ message: "Data coming soon" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
