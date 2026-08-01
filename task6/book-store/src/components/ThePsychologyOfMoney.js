import React from 'react';
import { Link } from 'react-router-dom';

function ThePsychologyOfMoney() {
  return (
    <div className="book-page">
      <h1>The Psychology of Money</h1>
      <p><strong>Author:</strong> Morgan Housel</p>
      <p><strong>Genre:</strong> Personal Finance, Psychology</p>
      <p><strong>Description:</strong> Timeless lessons on wealth, greed, and happiness exploring how psychology shapes financial decisions.</p>
      <div className="book-nav">
        <Link to="/books">Back to Books</Link>
        <Link to="/books/think-and-grow-rich">Previous</Link>
        <Link to="/books/deep-work">Next</Link>
      </div>
    </div>
  );
}

export default ThePsychologyOfMoney;