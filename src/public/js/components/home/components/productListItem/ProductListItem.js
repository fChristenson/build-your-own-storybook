const React = require("react");

module.exports = ({ product }) => {
  return (
    <li className="product-list__li" key={product.id}>
      <span className="product-list__span">{product.name}</span>
    </li>
  );
};
