const React = require("react");
const ProductList = require("../ProductList");
const productData = require("./fixtures/productList");

module.exports = () => {
  return <ProductList products={productData} />;
};
