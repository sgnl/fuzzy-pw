import React from 'react'

const TargetTrainer = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    let text = e.target.querySelector('input').value;

    this.props.handleSubmit(text);
  },
  handleInputChange: function(e) {
    let text = e.target.value;

    this.props.handleInputChange(text);
  },
  render: function() {
    return (
        <form className="trainerForm"
          onSubmit={this.handleSubmit}
        >
        <input id="trainerInput" type="password"
          onChange={this.handleInputChange}
          autoFocus={true}
          value={this.props.data.trainerInput}
        />
        </form>
    );
  }
});

export { TargetTrainer }
