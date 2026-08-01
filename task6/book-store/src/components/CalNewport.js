import React from 'react';
import { Link } from 'react-router-dom';

function CalNewport() {
  return (
    <div className="author-page">
      <h1>Cal Newport</h1>
      <p><strong>Famous Books:</strong> Deep Work</p>
      <p><strong>Country:</strong> United States</p>
      <p><strong>Biography:</strong> Cal Newport is an American author and computer science professor at Georgetown University. He writes about the intersection of technology, productivity, and focus, and is best known for his book "Deep Work."</p>
      <Link to="/authors">Back to Authors</Link>
    </div>
  );
}

export default CalNewport;