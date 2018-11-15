const React = require("react");
const BrowserRouter = require("react-router-dom/BrowserRouter").default;
const Route = require("react-router-dom/Route").default;
const Link = require("react-router-dom/Link").default;
const list = require("./list");
const { hot } = require("react-hot-loader");

const App = () => {
  return (
    <BrowserRouter>
      <div className="dev">
        <ul className="component-list">
          {list.map(item => {
            return (
              <li className="component-list__li" key={item.path}>
                <Link to={item.path}>
                  {item.title}
                </Link>
                <a
                  href={`/dev${item.path}`}
                  target="_blank"
                  className="component-list__dev"
                >
                  ⇱
                </a>
              </li>
            );
          })}
        </ul>
        <div className="component">
          {list.map(item => {
            return (
              <Route
                key={item.path}
                exact
                path={item.path}
                component={item.component}
              />
            );
          })}
        </div>
      </div>
    </BrowserRouter>
  );
};

module.exports = hot(module)(App);
