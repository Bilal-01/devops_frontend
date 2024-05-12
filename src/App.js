import React, { useState } from 'react';
import './App.css';
import Count from './components/counter';
import NameInput from './components/form';
import NameCountTable from './components/table';

function App() {
  // State to track data to send to the backend
  const [dataToSend, setDataToSend] = useState({
    id: 0, // Initial ID set to 0
    firstName: '',
    lastName: '',
    vegetables: 0,
    fruits: 0
  });

  // Function to handle sending data to the backend
  const sendDataToBackend = () => {
    // Increment the ID
    const newDataToSend = {
      ...dataToSend,
      id: dataToSend.id + 1 // Incrementing the ID
    };

    // Assuming you have a function or API endpoint to send data to the backend
    sendData(newDataToSend)
      .then(() => {
        // Reset the input fields and count values after successful sending
        console.log('Data sent to backend successfully:', newDataToSend);
        setDataToSend({
          id: newDataToSend.id, // Preserve the incremented ID
          firstName: '',
          lastName: '',
          vegetables: 0,
          fruits: 0
        });
        setCounterValues({ vegetables: 0, fruits: 0 }); // Reset counter values
        setNameValues({firstName: '', lastName: ''});
      })
      .catch(error => console.error('Error sending data to backend:', error));
  };

  // Function to send data to the backend
  const sendData = async (data) => {
    try {
      // Example: Sending data using fetch
      const response = await fetch('http://localhost:5000/api/data/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Failed to send data to backend');
      }
    } catch (error) {
      throw error;
    }
  };

  // Function to update data to send based on Count component
  const updateCountData = (vegetables, fruits) => {
    setCounterValues({ vegetables, fruits });
    setDataToSend(prevData => ({
      ...prevData,
      vegetables,
      fruits
    }));
  };

  // Function to update data to send based on NameInput component
  const updateNameData = (firstName, lastName) => {
    setNameValues({firstName, lastName})
    setDataToSend(prevData => ({
      ...prevData,
      firstName,
      lastName
    }));
  };

  // State to track counter values
  const [counterValues, setCounterValues] = useState({
    vegetables: 0,
    fruits: 0
  });

  const [nameValues, setNameValues] = useState({
    firstName: '',
    lastName: ''
  });

  return (
    <div className="App">
      <header className="App-header">
        <Count
          onUpdate={updateCountData}
          vegetables={counterValues.vegetables}
          fruits={counterValues.fruits}
        />
        <NameInput onUpdate={updateNameData} 
          firstname = {nameValues.firstName}
          lastname = {nameValues.lastName}
        />
        <NameCountTable />
        <button onClick={sendDataToBackend}>Send Data to Backend</button>
      </header>
    </div>
  );
}

export default App;
