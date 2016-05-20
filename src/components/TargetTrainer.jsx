import React from 'react'

const TargetTrainer = React.createClass({
  handleInputChange: function(e) {
    e.preventDefault();
    
    let text = e.target.value;

    this.props.handleInputChange(text);
  },
  handleReset: function(e) {
    if (e.keyCode === 13 && e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      return this.props.resetApp();
    }

    if (e.keyCode === 13) {
      e.preventDefault();

      let inputValue = e.target.value;

      this.props.handleSubmit(inputValue);
    }
  },
  render: function() {
    return (
        <form
          className="trainerForm"
          >
          <input id="trainerInput" type="password"
            onChange={this.handleInputChange}
            onKeyDown={this.handleReset}
            autoFocus={true}
            value={this.props.data.trainerInput}
          />
        </form>
    );
  }
});

export { TargetTrainer }
