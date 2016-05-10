
const React = require('react');
const ReactDOM = require('react-dom');

const SetTargetString = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    let targetString = {targetString: e.target.querySelector('input').value};

    this.props.setTarget(targetString);
  },
  handleChange: function(e) {
    let characterLength = { characterLength: e.target.value.length };

    this.props.updateCharacterCount(characterLength);
  },
  render: function() {
    return (
      <form className="setTargetForm"
        onSubmit={this.handleSubmit}
      >
        <input type="password"
          onChange={this.handleChange}
          autoFocus={true}
        />
        <p>set your target</p>
      </form>
    );
  }
});

const TargetTrainer = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    let text = e.target.querySelector('input').value;

    this.props.compareStrings(text);
  },
  handleTextChange: function(e) {
    let text = e.target.value;

    this.props.updateAccuracy(text);
  },
  render: function() {
    return (
      <form className="trainerForm"
        onSubmit={this.handleSubmit}
      >
        <input id="trainerInput" type="password"
          onChange={this.handleTextChange}
          autoFocus={true}
          value={this.props.data.trainerInput}
        />
      </form>
    );
  }
});

const FeedbackBanner = React.createClass({
  render: function() {
    return (
      <p className="banner feedback-banner">
        {this.props.message}
      </p>
    );
  }
});

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

const AccuracyVisualAid = React.createClass({
  render: function() {
    let accuracyBoxes = Array.prototype.map.call(this.props.data.targetString, (char, i) => {
      if (!this.props.data.trainerInput.length) {
        return (
            <div className="box box-initial-neutral" key={i}></div>
        );
      }

      let boxStatus = null;

      if (char === this.props.data.trainerInput[i]) {
        boxStatus = 'success';
      } else if (!this.props.data.trainerInput[i]) {
        boxStatus = 'initial-neutral';
      } else {
        boxStatus = 'fail';
      }

      return (
          <div className={`box box-${boxStatus}`} key={i}></div>
      );
    });

    return (
      <div className="accuracyDisplay">
        {accuracyBoxes}
      </div>
    );
  }
});

const MuscleMemory = React.createClass({
  getInitialState: function() {
    return {
      targetString: '',
      trainerInput: '',
      bannerMessage: '',
      win: false,
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

ReactDOM.render(<MuscleMemory />, document.getElementById('app'));
