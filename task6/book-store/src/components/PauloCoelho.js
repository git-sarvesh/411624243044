import React from 'react';
import { Link } from 'react-router-dom';

function PauloCoelho() {
  return (
    <div className="author-page">
      <h1>Paulo Coelho</h1>
      <p><strong>Famous Books:</strong> The Alchemist</p>
      <p><strong>Country:</strong> Brazil</p>
      <p><strong>Biography:</strong> Paulo Coelho is a Brazilian lyricist and novelist. He is best known for his novel "The Alchemist," which has sold over 65 million copies worldwide and has been translated into 80 languages.</p>
      <Link to="/authors">Back to Authors</Link>
    </div>
  );
}

export default PauloCoelho;