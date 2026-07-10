import React, { useState } from 'react';

function BGcolourChanger() {
  const [selectedColor, setSelectedColor] = useState('red');
  const [appliedColor, setAppliedColor] = useState('white');

  const handleApply = () => {
    setAppliedColor(selectedColor);
  };

  return (
    <div
      style={{
        backgroundColor: appliedColor,
        minHeight: '100vh',
        width: '100%',
        textAlign: 'center',
        paddingTop: '30px',
      }}
    >
      <h2>Background Color Changer</h2>

      <div
        style={{
          backgroundColor: 'white',
          padding: '30px',
          border: '1px solid #ccc',
          width: '300px',
          margin: '20px auto',
          borderRadius: '10px',
        }}
      >
        <label htmlFor="colorSelect">Choose a color: </label>

        <select
          id="colorSelect"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>

        <br /><br />

        <button onClick={handleApply}>
          Apply
        </button>
      </div>
    </div>
  );
}

export default BGcolourChanger;