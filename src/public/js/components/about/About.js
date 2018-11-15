const React = require("react");

module.exports = () => {
  return (
    <div className="about">
      <h1 className="about__h1">ABOUT</h1>
      <ul className="about__ul">
        <li className="about__li">
          <a className="about__a" href="#">Contact</a>
        </li>
        <li className="about__li">
          <a className="about__a" href="#">Some other info</a>
        </li>
      </ul>
    </div>
  );
};
