

const React = require('react');
const ReactDOM = require('react-dom');

const SetTargetString = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.setTarget(e.target.querySelector('input').value)
  },
  render: function() {
    return (
        <form
            className="setTargetForm"
            onSubmit={this.handleSubmit}
            onChange={this.props.handleKeyChanges}
        />
          <input />
          <input
              type="submit"
              value="Start Training"
          />
        </form>
    );
  }
});

const TargetTrainer = React.createClass({
  render: function() {
    return (
        <p>{this.props.targetString}</p>
    );
  }
});

const Interface = React.createClass({
  doSomething: function() {
    console.log('yea!');
  },
  render: function() {
    return (
        <div className="interface">
          {!this.props.data.targetString && <SetTargetString {...this.props} />}
          {this.props.data.targetString && <TargetTrainer targetString={this.props.data.targetString} />}
        </div>
    );
  }
});

const AccuracyVisualAid = React.createClass({
  render: function() {
    return (
      <p>I am from Accuracy Aid.</p>
    );
  }
});

const MuscleMemory = React.createClass({
  getInitialState: function() {
    return {
      targetString: ''
    };
  },
  setTarget: function(newTargetString) {
    this.setState({ targetString : newTargetString})
  },
  render: function() {
    return (
        <div>
        <Interface data={this.state} setTarget={this.setTarget}/>
          <AccuracyVisualAid />
        </div>
    );
  }
});

ReactDOM.render(<MuscleMemory />, document.getElementById('app'));
