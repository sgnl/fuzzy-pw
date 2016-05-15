import React from 'react'

const FeedbackBanner = React.createClass({
  render: function() {
    return (
        <p className="banner feedback-banner">
        {this.props.message}
      </p>
    );
  }
});

export { FeedbackBanner }
