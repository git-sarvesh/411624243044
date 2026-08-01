import React from 'react';
import { Link } from 'react-router-dom';

function ThinkAndGrowRich() {
  return (
    <div className="book-page">
      <h1>Think and Grow Rich</h1>
      <p><strong>Author:</strong> Napoleon Hill</p>
      <p><strong>Genre:</strong> Self-Help, Personal Development</p>
      <p><strong>Description:</strong> A classic guide to achieving success and wealth through the power of positive thinking, persistence, and goal-setting.</p>
      <div className="book-nav">
        <Link to="/books">Back to Books</Link>
        <Link to="/books/rich-dad-poor-dad">Previous</Link>
        <Link to="/books/the-psychology-of-money">Next</Link>
      </div>
    </div>
  );
}

export default ThinkAndGrowRich;