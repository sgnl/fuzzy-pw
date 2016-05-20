
import React from 'react';
import { VisualAid } from './VisualAid';

const HistoryDisplay = ({ history, targetString}) => (
    <div className="history-display">
      {history.map((string, index) => <VisualAid
                                        targetString={targetString}
                                        trainerInput={string}
                                        key={index}
                                      />)}
    </div>
);

export { HistoryDisplay };
