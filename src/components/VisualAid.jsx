
import React from 'react'

const VisualAid = ({ targetString, trainerInput }) => {
  return (
    <div className="accuracy-display">
      {Array.prototype.map.call(targetString, (char, i) => {
        if (!trainerInput.length) {
          return (
              <div className="box box-initial-neutral" key={i}></div>
          );
        }

        let boxStatus = null;

        if (char === trainerInput[i]) {
          boxStatus = 'success';
        } else if (!trainerInput[i]) {
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

export { VisualAid }
