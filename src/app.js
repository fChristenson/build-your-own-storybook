const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/api/v1/products", (req, res) => {
  res.json([]);
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "main.html"));
});

module.exports = app;
