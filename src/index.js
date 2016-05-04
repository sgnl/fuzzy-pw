
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
        <p>Enter your phrase</p>
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
    console.log(this.props.data)
    return (
      <form className="trainerForm"
        onSubmit={this.handleSubmit}
      >
        <input id="trainerInput" type="text"
          onChange={this.handleTextChange}
          autoFocus={true}
          value={this.props.data.trainerInput}
        />
      </form>
    );
  }
});

const WinBanner = React.createClass({
  render: function() {
    return (
      <p className="winBanner">
        Success
      </p>
    );
  }
});

const TryAgainBanner = React.createClass({
  render: function() {
    return (
        <p className="tryAgainBanner">
          Try Again
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
        {this.props.data.win && <WinBanner />}
        {(!this.props.data.win && this.props.data.targetString) && <TryAgainBanner />}
      </div>
    );
  }
});

const AccuracyVisualAid = React.createClass({
  render: function() {
    let accuracyBoxes = Array.prototype.map.call(this.props.data.targetString, (char, i) => {
      if (!this.props.data.trainerInput.length) {
        return (
            <div className="box box--neutral" key={i}></div>
        );
      }

      let boxStatus = null;

      if (char === this.props.data.trainerInput[i]) {
        boxStatus = true
      } else {
        boxStatus = false;
      }

      return (
          <div className={`box box--${boxStatus}`} key={i}></div>
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
  compareStrings: function(inputString) {
    if (inputString === this.state.targetString) {
      this.setState({win: true});
    }
  },
  updateAccuracy: function(inputString) {
    console.log(inputString);
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
