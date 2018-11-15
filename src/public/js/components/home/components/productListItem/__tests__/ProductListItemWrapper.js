const React = require("react");
const ProductListItem = require("../ProductListItem");

module.exports = () => {
  return (
    <div
      style={{
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "200px"
        }}
      >
        <ProductListItem product={{ id: 1, name: "foobar" }} />
      </div>
    </div>
  );
};
