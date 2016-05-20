
import React from 'react';

import { VisualAid } from './VisualAid';
import { HistoryDisplay } from './HistoryDisplay';

const AccuracyDisplay = React.createClass({
  getInitialState: function() {
    return {
      mostRecentComparision: [],
      history: []
    };
  },
  render: function() {
    console.log(this.state);
    return (
        <div>
          <VisualAid data={this.props.data} {...this} />
          <HistoryDisplay data={this.props.data} {...this} />
        </div>
    );
  }
});

export { AccuracyDisplay }
