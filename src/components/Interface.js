import React from 'react'

import { TargetTrainer } from './TargetTrainer'
import { FeedbackBanner } from './FeedbackBanner'

const Interface = React.createClass({
  render: function() {
    return (
      <div className="interface">
        <TargetTrainer {...this.props} />
        <FeedbackBanner message={this.props.data.bannerMessage} />
      </div>
    );
  }
});

export { Interface }
