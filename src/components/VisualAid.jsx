
import React from 'react'

const VisualAid = ({ targetString, trainerInput }) => {
  return (
    <div className="accuracy-display">
      {targetString.split("").map((char, index) => {
        if (!trainerInput.length) {
          return (
              <div className="box box-initial-neutral" key={index}></div>
          );
        }

        let boxStatus = null;

        if (char === trainerInput[index]) {
          boxStatus = 'success';
        } else if (!trainerInput[index]) {
          boxStatus = 'initial-neutral';
        } else {
          boxStatus = 'fail';
        }

        return (
            <div className={`box box-${boxStatus}`} key={index}></div>
        );
      })}
    </div>
  );
};

export { VisualAid }
