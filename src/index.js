
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
          <input type="text"
            onChange={this.handleChange}
          />
          <input type="submit" value="Start Training" />
        </form>
    );
  }
});

const TargetTrainer = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
  },
  render: function() {
    return (
        <form className="trainerForm"
          onSubmit={this.handleSubmit}
        >
        <label for="trainerInput">Test your might</label>
        <input id="trainerInput" type="text"
          onChange={this.handleChange}
        />
        </form>
    );
  }
});

const Interface = React.createClass({
  render: function() {
    return (
        <div className="interface">
            {!this.props.data.targetString && <SetTargetString {...this.props} />}
            {this.props.data.targetString && <TargetTrainer {...this.props} />}
        </div>
    );
  }
});

const AccuracyVisualAid = React.createClass({
    render: function() {
        console.log(this.props.data)
    return (
        <div>
            <p>This is the AccuracyVisualAid</p>
            <p>{this.props.data.characterLength}</p>
        </div>
    );
  }
});

const MuscleMemory = React.createClass({
  getInitialState: function() {
    return {
      targetString: '',
      attempt: '',
      characterLength: 0
    };
  },
  setTarget: function(targetString) {
    this.setState(targetString);
  },
  updateCharacterCount: function(characterLength) {
    this.setState(characterLength);
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
