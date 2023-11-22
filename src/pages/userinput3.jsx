import React, { useState } from 'react';

function DropdownComponent() {
  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle changes in the dropdown selection
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div id=''>
      {/* Dropdown menu with three options */}
      <select value={selectedOption} id='dropDown' onChange={handleSelectChange}>
        <option value="">User</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {/* Display the down arrow symbol */}
      <span role="img" aria-label="down-arrow">↓</span>

      {/* Display the selected option */}
      {selectedOption && <p>Selected Option: {selectedOption}</p>}
    </div>
  );
}

export default DropdownComponent;
