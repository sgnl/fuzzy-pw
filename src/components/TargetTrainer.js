import React from 'react'

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

export { TargetTrainer }
