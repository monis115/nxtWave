import React, { useState } from 'react';
import CreateItem from './CreateItem';

function UserInputForm2() {
  // State to store the user's input
  const [userInput, setUserInput] = useState('');

  // Function to handle changes in the input
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User entered: ', userInput);
    // Add logic for handling the user input (e.g., API call, data processing)
  };

  return (
  
      <input id='userinput1'
        type="text"
        placeholder="www.slack.iB  tarinees.com"
        value={userInput}
        onChange={handleInputChange}
      />
    
  );
}

export default UserInputForm;
