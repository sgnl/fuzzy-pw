import React from 'react'

import { SetTargetString } from './SetTargetString'
import { TargetTrainer } from './TargetTrainer'
import { FeedbackBanner } from './FeedbackBanner'

const Interface = React.createClass({
  render: function() {
    return (
        <div className="interface">
        {!this.props.data.targetString && <SetTargetString {...this.props} />}
      {this.props.data.targetString && <TargetTrainer {...this.props} />}
      {<FeedbackBanner message={this.props.data.bannerMessage}/>} 
      </div>
    );
  }
});

export { Interface }
