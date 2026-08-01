import React from 'react';
import { Link } from 'react-router-dom';

function DeepWork() {
  return (
    <div className="book-page">
      <h1>Deep Work</h1>
      <p><strong>Author:</strong> Cal Newport</p>
      <p><strong>Genre:</strong> Productivity, Self-Help</p>
      <p><strong>Description:</strong> Rules for focused success in a distracted world, showing how deep concentration leads to meaningful achievement.</p>
      <div className="book-nav">
        <Link to="/books">Back to Books</Link>
        <Link to="/books/the-psychology-of-money">Previous</Link>
        <Link to="/books/atomic-habits">Next</Link>
      </div>
    </div>
  );
}

export default DeepWork;