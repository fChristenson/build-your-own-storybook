const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
