require("./dev.css");
const About = require("../src/public/js/components/about/About");
const FeedbackForm = require("../src/public/js/components/about/components/feedbackForm/__tests__/FeedbackFormWrapper");
const Home = require("../src/public/js/components/home/Home");
const ProductList = require("../src/public/js/components/home/components/productList/__tests__/ProductListWrapper");
const ProductListItem = require("../src/public/js/components/home/components/productListItem/__tests__/ProductListItemWrapper");

const Item = (title, component, path) => {
  return {
    title,
    component,
    path
  };
};

module.exports = [
  Item("about", About, "/about"),
  Item("feedbackForm", FeedbackForm, "/feedbackForm"),
  Item("home", Home, "/home"),
  Item("productList", ProductList, "/productList"),
  Item("productListItem", ProductListItem, "/productListItem")
];
