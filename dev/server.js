const express = require("express");
const app = express();
const path = require("path");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const webpackConfig = require("../webpack.config.dev");
const compiler = webpack(webpackConfig);
const webpackHotMiddleware = require("webpack-hot-middleware");
const productListData = require("../src/public/js/components/home/__tests__/fixtures/productList");

app.use(express.json());

app.use(
  middleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

app.post("/api/v1/feedback", (req, res) => {
  res.json({ message: "Thank you for your feedback" });
});

app.get("/api/v1/products", (req, res) => {
  res.json(productListData);
});

app.get("/dev/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "dev.html"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "showcase.html"));
});

app.listen(3001);
