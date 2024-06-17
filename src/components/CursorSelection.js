import React from 'react';

import cursor1 from '../images/cursor1.png'
import cursor2 from '../images/cursor2.png'
import cursor3 from '../images/cursor3.png'
import cursor4 from '../images/cursor4.png'

const CursorSelection = ({ onCursorSelect }) => {
  const cursors = [cursor1, cursor2, cursor3, cursor4];

  return (
    <div className="cursor-selection">
      <h2>Select a Cursor</h2>
      <div>
        {cursors.map((cursor, index) => (
          <div
            key={index}
            className="cursor-option"
            onClick={() => onCursorSelect(cursor)}
          >
            <img src={cursor} alt={`Cursor ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CursorSelection;
