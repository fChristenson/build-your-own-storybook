const React = require("react");
const BrowserRouter = require("react-router-dom/BrowserRouter").default;
const Route = require("react-router-dom/Route").default;
const Home = require("../home/Home");
const About = require("../about/About");

module.exports = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
};
