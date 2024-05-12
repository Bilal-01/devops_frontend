import React, { useState, useEffect } from 'react';

function NameCountTable({ dataToSend }) {
  // State for storing user data
  const [userData, setUserData] = useState([]);

  // Function to fetch user data from the backend
  useEffect(() => {
    // Fetch user data from the backend API
    fetchUserData()
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, [userData]);

  // Function to fetch user data from the backend
  const fetchUserData = async () => {
    try {
      // Fetch user data from the backend API
      const response = await fetch('http://localhost:5000/api/data');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      // Parse the JSON response
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <div>
        <h2>User Data Table:</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Vegetables</th>
              <th>Fruits</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.vegetables}</td>
                <td>{user.fruits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NameCountTable;
