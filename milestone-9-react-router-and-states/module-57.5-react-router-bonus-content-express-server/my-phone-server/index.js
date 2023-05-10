const express = require("express");
const cors = require("cors");
const phones = require("./phones.json");

const app = express();
const port = 5000;

app.use(cors());

// root directory
app.get("/", (req, res) => {
  res.send("my phone information coming soon moon");
});

// phone api
app.get("/phones", (req, res) => {
  res.send(phones);
});

// single phone
app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phones.find((phone) => phone.id === id) || [{}];
  res.send(phone);
  console.log(`i need data for id: ${id}`);
});

app.listen(port, () => {
  console.log(`my phone server is running on port: ${port}`);
});
