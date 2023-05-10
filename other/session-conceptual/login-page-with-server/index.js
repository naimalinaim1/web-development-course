const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();
const services = require("./services.json");

app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "hello server" });
});

app.get("/services", (req, res) => {
  res.send(services);
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
