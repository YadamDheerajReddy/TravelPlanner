// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/plan-trip">Plan a Trip</Link></li>
        <li><Link to="/share-itinerary">Share Itinerary</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
