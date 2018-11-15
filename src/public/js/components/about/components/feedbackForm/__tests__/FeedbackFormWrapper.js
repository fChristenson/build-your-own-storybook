const React = require("react");
const { Provider } = require("react-redux");
const { createStore, combineReducers } = require("redux");
const formReducer = require("../formReducer");
const FeedbackForm = require("../FeedbackFormContainer");

const reducer = combineReducers({
  feedbackForm: formReducer
});

const store = createStore(reducer);

module.exports = () => {
  return (
    <Provider store={store}>
      <FeedbackForm />
    </Provider>
  );
};
