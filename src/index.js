
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

    this.props.compareStrings(e.target.querySelector('input').value);
  },
  render: function() {
    return (
      <form className="trainerForm"
        onSubmit={this.handleSubmit}
      >
        <input id="trainerInput" type="text"
          onChange={this.handleChange}
          autoFocus={true}
        />
        <p></p>
      </form>
    );
  }
});

const WinBanner = React.createClass({
  render: function() {
    return (
      <p className="winBanner">
        You Win!
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
        {this.props.data.win && <WinBanner /> }
      </div>
    );
  }
});

const AccuracyVisualAid = React.createClass({
  render: function() {
    let accuracyBoxes = Array.prototype.map.call(this.props.data.targetString, _ => {
      return (
          <div className="box box--neutral"></div>
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
  compareStrings: function(trainerString) {
    if (trainerString === this.state.targetString) {
      this.setState({win: true});
    }
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
