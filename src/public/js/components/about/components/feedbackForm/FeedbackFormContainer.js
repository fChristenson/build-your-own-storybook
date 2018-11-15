const { connect } = require("react-redux");
const FeedbackForm = require("./FeedbackForm");

const mapStateToProps = state => {
  return {
    message: state.feedbackForm.message
  };
};

const dispatchToProps = dispatch => {
  return {
    onSubmit: message => {
      dispatch({ type: "MESSAGE", value: message });
    }
  };
};

module.exports = connect(mapStateToProps, dispatchToProps)(FeedbackForm);
