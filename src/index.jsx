
const React = require('react');
const ReactDOM = require('react-dom');

import { Interface } from './components/Interface'
import { AccuracyDisplay } from './components/AccuracyDisplay'

const MuscleMemoryApp = React.createClass({
  initialState: function() {
    return {
      targetString: '',
      trainerInput: '',
      bannerMessage: 'set the key-pattern you want to train',
      win: false,
      resetState: false
    }
  },
  getInitialState: function() {
    return this.initialState();
  },
  handleInputChange: function(inputValue) {
    this.setState({ trainerInput: inputValue });
  },
  handleSubmit: function(inputValue) {
    // if there is no target then set the target to be the string from the form
    if (!this.state.targetString) {
      this.setState({  
        targetString: inputValue,
        trainerInput: '',
        bannerMessage: 'press the enter key to compare. press shift+enter to reset'
      });

    // otherwise we are in the `game loop` so we should compare
    // the input with the target string which was set earlier
    } else {
      this.compareStrings(inputValue);
    }
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
        this.resetTrainerInput()
        this.updateBanner('no match.')
    }
  },
  updateAccuracy: function(inputString) {
    this.setState({trainerInput: inputString});
  },
  resetApp: function() {
    this.setState(this.initialState());
  },
  render: function() {
    return (
      <div>
        <Interface data={this.state} {...this} />
        <AccuracyDisplay data={this.state} {...this} />
      </div>
    );
  }
});

ReactDOM.render(<MuscleMemoryApp />, document.getElementById('app'));
