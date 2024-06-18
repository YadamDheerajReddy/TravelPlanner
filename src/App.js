// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlanTrip from './pages/PlanTrip';
import ShareItinerary from './pages/ShareItinerary';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-trip" element={<PlanTrip />} />
        <Route path="/share-itinerary" element={<ShareItinerary />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
