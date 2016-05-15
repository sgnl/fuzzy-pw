import React from 'react'

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

export { SetTargetString }
