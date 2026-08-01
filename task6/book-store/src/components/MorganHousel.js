import React from 'react';
import { Link } from 'react-router-dom';

function MorganHousel() {
  return (
    <div className="author-page">
      <h1>Morgan Housel</h1>
      <p><strong>Famous Books:</strong> The Psychology of Money</p>
      <p><strong>Country:</strong> United States</p>
      <p><strong>Biography:</strong> Morgan Housel is an American author and financial journalist. He is a partner at The Collaborative Fund and author of "The Psychology of Money," which explores the behavioral aspects of finance.</p>
      <Link to="/authors">Back to Authors</Link>
    </div>
  );
}

export default MorganHousel;