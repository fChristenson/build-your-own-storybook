const React = require("react");
const ProductListItem = require("../productListItem/ProductListItem");

module.exports = ({ products = [] }) => {
  return (
    <ul className="product-list">
      {products.map(product => {
        return <ProductListItem key={product.id} product={product} />;
      })}
    </ul>
  );
};
