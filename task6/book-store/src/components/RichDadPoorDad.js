import React from 'react';
import { Link } from 'react-router-dom';

function RichDadPoorDad() {
  return (
    <div className="book-page">
      <h1>Rich Dad Poor Dad</h1>
      <p><strong>Author:</strong> Robert Kiyosaki</p>
      <p><strong>Genre:</strong> Personal Finance, Business</p>
      <p><strong>Description:</strong> A story about two dads — one rich, one poor — and the lessons they taught about money, investing, and financial independence.</p>
      <div className="book-nav">
        <Link to="/books">Back to Books</Link>
        <Link to="/books/the-alchemist">Previous</Link>
        <Link to="/books/think-and-grow-rich">Next</Link>
      </div>
    </div>
  );
}

export default RichDadPoorDad;