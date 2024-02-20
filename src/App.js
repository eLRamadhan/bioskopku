import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import Header from './components/Header';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import TicketBooking from './pages/TicketBooking'; // Anda perlu membuat komponen TicketBooking terlebih dahulu

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes> {/* Gunakan Routes di sini */}
          <Route path="/" element={<Home />} /> {/* Gunakan element prop untuk menentukan komponen yang akan dirender */}
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/book-tickets/:id" element={<TicketBooking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;