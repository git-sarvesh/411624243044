import React from 'react';
import { Link } from 'react-router-dom';

function AtomicHabits() {
  return (
    <div className="book-page">
      <h1>Atomic Habits</h1>
      <p><strong>Author:</strong> James Clear</p>
      <p><strong>Genre:</strong> Self-Help, Productivity</p>
      <p><strong>Description:</strong> An easy and proven way to build good habits and break bad ones through tiny changes that deliver remarkable results.</p>
      <div className="book-nav">
        <Link to="/books">Back to Books</Link>
        <Link to="/books/deep-work">Previous</Link>
        <Link to="/books/the-alchemist">Next</Link>
      </div>
    </div>
  );
}

export default AtomicHabits;