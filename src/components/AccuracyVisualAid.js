import React from 'react'

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

export { AccuracyVisualAid }
