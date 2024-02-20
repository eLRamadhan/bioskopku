import React from 'react';
import { Link } from 'react-router-dom';

function MovieDetail() {
  return (
    <div>
      <h2>Movie Title</h2>
      <p>Description of the movie goes here...</p>
      <Link to="/book-tickets/:id">Book Tickets</Link>
    </div>
  );
}

export default MovieDetail;