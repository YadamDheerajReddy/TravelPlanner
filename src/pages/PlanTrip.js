// src/pages/PlanTrip.js
import React, { useState } from 'react';
import ItineraryForm from '../components/ItineraryForm';
import ItineraryList from '../components/ItineraryList';

const PlanTrip = () => {
  const [itineraries, setItineraries] = useState([]);

  const addItinerary = (newItinerary) => {
    setItineraries([...itineraries, newItinerary]);
  };

  return (
    <div>
      <h1>Plan Your Trip</h1>
      <ItineraryForm addItinerary={addItinerary} />
      <ItineraryList itineraries={itineraries} />
    </div>
  );
};

export default PlanTrip;
