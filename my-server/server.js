// server.js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3002;

app.use(bodyParser.json());

app.post("/api/data", (req, res) => {
  console.log("Received data from extension:", req.body);
  res.json({ message: "Data received successfully!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
