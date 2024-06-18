// src/components/DestinationSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const DestinationSearch = ({ addDestination }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`https://api.example.com/destinations?q=${query}`);
    setResults(response.data);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destinations..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((destination) => (
          <li key={destination.id} onClick={() => addDestination(destination)}>
            {destination.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationSearch;
