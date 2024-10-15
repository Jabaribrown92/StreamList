// src/components/StreamList.js
import React, { useState } from 'react';

const StreamList = () => {
  const [stream, setStream] = useState('');
  const [streamList, setStreamList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStreamList([...streamList, stream]);
    setStream('');  // Clear input after submit
  };

  return (
    <div>
      <h2>Manage Your StreamList</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={stream}
          onChange={(e) => setStream(e.target.value)}
          placeholder="Enter your stream"
          required
        />
        <button type="submit">Add Stream</button>
      </form>
      
      <h3>Your Stream List</h3>
      <ul>
        {streamList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
