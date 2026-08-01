import React from 'react';
import { Link } from 'react-router-dom';

function NapoleonHill() {
  return (
    <div className="author-page">
      <h1>Napoleon Hill</h1>
      <p><strong>Famous Books:</strong> Think and Grow Rich</p>
      <p><strong>Country:</strong> United States</p>
      <p><strong>Biography:</strong> Napoleon Hill was an American self-help author. He is best known for his book "Think and Grow Rich," which is considered one of the best-selling self-help books of all time.</p>
      <Link to="/authors">Back to Authors</Link>
    </div>
  );
}

export default NapoleonHill;