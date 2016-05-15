
const React = require('react');
const ReactDOM = require('react-dom');

import { Interface } from './components/Interface'
import { AccuracyVisualAid } from './components/AccuracyVisualAid'

const MuscleMemoryApp = React.createClass({
  getInitialState: function() {
    return {
      targetString: '',
      trainerInput: '',
      bannerMessage: '',
      win: false,
      resetState: false,
      characterLength: 0
    };
  },
  setTarget: function(targetString) {
    this.setState(targetString);
  },
  updateCharacterCount: function(characterLength) {
    this.setState(characterLength);
  },
  resetTrainerInput: function(input = '') {
    this.setState({trainerInput: input});
  },
  updateBanner: function(msg) {
    this.setState({bannerMessage: msg});
  },
  compareStrings: function(inputString) {
    switch(true) {
      case inputString.length < this.state.targetString.length:
        this.resetTrainerInput();
        return this.updateBanner('attempt too short. try again.');
      
      case inputString.length > this.state.targetString.length:
        this.resetTrainerInput();
        return this.updateBanner('attempt too long. try agin.');

      case inputString === this.state.targetString:
        this.setState({win: true});
        this.resetTrainerInput();
        this.updateBanner('success!');
        return;

      default:
        this.resetTrainerInput();
        this.updateBanner('no match.');
    }
  },
  updateAccuracy: function(inputString) {
    this.setState({trainerInput: inputString});
  },
  render: function() {
    return (
      <div>
        <Interface data={this.state} {...this} />
        <AccuracyVisualAid data={this.state} {...this} />
      </div>
    );
  }
});

ReactDOM.render(<MuscleMemoryApp />, document.getElementById('app'));
