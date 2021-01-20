import React from 'react';

function Number({ text, num }) {
  return (
    <div className="App">
      <p>{text}{num}</p>
    </div>
  );
}

export default Number;
