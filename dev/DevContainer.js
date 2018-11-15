const React = require("react");
const list = require("./list");
const { hot } = require("react-hot-loader");

const App = () => {
  const Component = list.find(
    item => `/dev${item.path}` === window.location.pathname
  ).component;

  return <Component />;
};

module.exports = hot(module)(App);
