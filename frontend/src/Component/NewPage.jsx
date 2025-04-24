import React, { useEffect, useState } from 'react';
import './NewPage.css';

export const NewPage = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    fetch("http://localhost:8081/api/time")
      .then(response => response.text())
      .then(data => setCurrentTime(data))
      .catch(error => console.error("Error fetching time: ", error));
  }, []);

  return (
    <div className="page">
      <h2>New Page</h2>
      <p>Current time: {currentTime}</p>
      <p>Static Text: This is some static text displayed on the new page.</p>
    </div>
  );
};
