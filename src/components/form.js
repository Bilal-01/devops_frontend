import React, { useEffect, useState } from 'react';

function NameInput({ onUpdate, firstname, lastname }) {
  // State for first name
  const [firstName, setFirstName] = useState('');

  // State for last name
  const [lastName, setLastName] = useState('');

  // Function to handle changes in the first name input
  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
    onUpdate(value, lastName);
  };

  // Function to handle changes in the last name input
  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
    onUpdate(firstName, value);
  };

  useEffect(() => {
    setFirstName(firstname)
  },[firstname]);

  useEffect(() => {
    setLastName(lastname)
  },[lastname])

  return (
    <div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
    </div>
  );
}

export default NameInput;
