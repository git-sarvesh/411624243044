import React from 'react';
import { Link } from 'react-router-dom';

function RobertKiyosaki() {
  return (
    <div className="author-page">
      <h1>Robert Kiyosaki</h1>
      <p><strong>Famous Books:</strong> Rich Dad Poor Dad</p>
      <p><strong>Country:</strong> United States</p>
      <p><strong>Biography:</strong> Robert Kiyosaki is an American businessman and author. He is the founder of Rich Dad Company and author of "Rich Dad Poor Dad," one of the best-selling personal finance books of all time.</p>
      <Link to="/authors">Back to Authors</Link>
    </div>
  );
}

export default RobertKiyosaki;