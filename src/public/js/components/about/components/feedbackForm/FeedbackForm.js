const React = require("react");

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(event) {
    event.preventDefault();
    const data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ feedback: event.target.feedback.value })
    };
    const res = await fetch("/api/v1/feedback", data);
    const json = await res.json();
    this.props.onSubmit(json.message);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="feedback" />
        <input type="submit" />
        <div>{this.props.message}</div>
      </form>
    );
  }
}

module.exports = FeedbackForm;
