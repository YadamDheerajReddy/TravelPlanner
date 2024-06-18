// src/components/ItineraryList.js
import React from 'react';

const ItineraryList = ({ itineraries }) => (
  <ul>
    {itineraries.map((itinerary) => (
      <li key={itinerary.name}>
        <h3>{itinerary.name}</h3>
        <ul>
          {itinerary.destinations.map((destination) => (
            <li key={destination.id}>{destination.name}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

export default ItineraryList;
