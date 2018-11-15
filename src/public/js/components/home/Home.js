const React = require("react");
const ProductList = require("./components/productList/ProductList");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  async componentDidMount() {
    const res = await fetch("/api/v1/products");
    const products = await res.json();
    this.setState({ products });
  }
  render() {
    return (
      <div className="home">
        <h1 className="home__h1">HOME</h1>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

module.exports = Home;
