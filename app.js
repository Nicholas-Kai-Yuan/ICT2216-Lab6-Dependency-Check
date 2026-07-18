const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("ICT2216 Lab 6 — OWASP Dependency Check");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});