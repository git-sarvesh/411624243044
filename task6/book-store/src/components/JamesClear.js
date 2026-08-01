import React from 'react';
import { Link } from 'react-router-dom';

function JamesClear() {
  return (
    <div className="author-page">
      <h1>James Clear</h1>
      <p><strong>Famous Books:</strong> Atomic Habits</p>
      <p><strong>Country:</strong> United States</p>
      <p><strong>Biography:</strong> James Clear is an American author, speaker, and entrepreneur known for his work on habit formation. His book "Atomic Habits" has sold millions of copies worldwide and has been translated into over 50 languages.</p>
      <Link to="/authors">Back to Authors</Link>
    </div>
  );
}

export default JamesClear;