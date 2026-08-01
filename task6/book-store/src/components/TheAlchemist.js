import React from 'react';
import { Link } from 'react-router-dom';

function TheAlchemist() {
  return (
    <div className="book-page">
      <h1>The Alchemist</h1>
      <p><strong>Author:</strong> Paulo Coelho</p>
      <p><strong>Genre:</strong> Fiction, Adventure</p>
      <p><strong>Description:</strong> A young shepherd named Santiago embarks on a journey to find a hidden treasure, discovering the meaning of life along the way.</p>
      <div className="book-nav">
        <Link to="/books">Back to Books</Link>
        <Link to="/books/atomic-habits">Previous</Link>
        <Link to="/books/rich-dad-poor-dad">Next</Link>
      </div>
    </div>
  );
}

export default TheAlchemist;