
import React from 'react';

import { VisualAid } from './VisualAid.jsx';

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
          <VisualAid data={this.props.data} {...this} />
        </div>
    );
  }
});

export { AccuracyDisplay }
