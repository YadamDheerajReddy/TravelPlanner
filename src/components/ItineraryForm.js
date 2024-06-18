// src/components/ItineraryForm.js
import React, { useState } from 'react';
import DestinationSearch from './DestinationSearch';

const ItineraryForm = ({ addItinerary }) => {
  const [itinerary, setItinerary] = useState({ name: '', destinations: [] });

  const addDestination = (destination) => {
    setItinerary({
      ...itinerary,
      destinations: [...itinerary.destinations, destination],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItinerary(itinerary);
    setItinerary({ name: '', destinations: [] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itinerary.name}
        onChange={(e) => setItinerary({ ...itinerary, name: e.target.value })}
        placeholder="Itinerary Name"
        required
      />
      <DestinationSearch addDestination={addDestination} />
      <button type="submit">Save Itinerary</button>
    </form>
  );
};

export default ItineraryForm;
