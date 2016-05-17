import React from 'react'

const AccuracyVisualAid = props => {
  return (
    <div className="accuracyDisplay">
      {Array.prototype.map.call(props.data.targetString, (char, i) => {
        if (!props.data.trainerInput.length) {
          return (
              <div className="box box-initial-neutral" key={i}></div>
          );
        }

        let boxStatus = null;

        if (char === props.data.trainerInput[i]) {
          boxStatus = 'success';
        } else if (!props.data.trainerInput[i]) {
          boxStatus = 'initial-neutral';
        } else {
          boxStatus = 'fail';
        }

        return (
            <div className={`box box-${boxStatus}`} key={i}></div>
        );
      })}
    </div>
  );
};

export { AccuracyVisualAid }
