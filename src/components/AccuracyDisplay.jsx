import React from 'react';

import { VisualAid } from './VisualAid';
import { HistoryDisplay } from './HistoryDisplay';

const AccuracyDisplay = React.createClass({
  render: function() {
    console.log(this.props.data)
    return (
        <div>
          <VisualAid
            targetString={this.props.data.targetString}
            trainerInput={this.props.data.trainerInput}
            {...this} />
          <HistoryDisplay
            history={this.props.data.history}
            targetString={this.props.data.targetString}
          />
        </div>
    );
  }
});

export { AccuracyDisplay }
