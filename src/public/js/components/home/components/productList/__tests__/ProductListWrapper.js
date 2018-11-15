const React = require("react");
const ProductList = require("../ProductList");
const productData = require("../../../__tests__/fixtures/productList");

module.exports = () => {
  return <ProductList products={productData} />;
};
