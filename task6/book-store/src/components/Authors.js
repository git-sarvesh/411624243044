import React from 'react';
import { Link } from 'react-router-dom';

const authors = [
  { id: 'james-clear', name: 'James Clear' },
  { id: 'paulo-coelho', name: 'Paulo Coelho' },
  { id: 'robert-kiyosaki', name: 'Robert Kiyosaki' },
  { id: 'napoleon-hill', name: 'Napoleon Hill' },
  { id: 'morgan-housel', name: 'Morgan Housel' },
  { id: 'cal-newport', name: 'Cal Newport' },
];

function Authors() {
  return (
    <div className="authors">
      <h1>Our Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <Link to={`/authors/${author.id}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Authors;