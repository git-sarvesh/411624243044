import React from 'react';
import { Link } from 'react-router-dom';

const books = [
  { id: 'atomic-habits', title: 'Atomic Habits', author: 'James Clear' },
  { id: 'the-alchemist', title: 'The Alchemist', author: 'Paulo Coelho' },
  { id: 'rich-dad-poor-dad', title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki' },
  { id: 'think-and-grow-rich', title: 'Think and Grow Rich', author: 'Napoleon Hill' },
  { id: 'the-psychology-of-money', title: 'The Psychology of Money', author: 'Morgan Housel' },
  { id: 'deep-work', title: 'Deep Work', author: 'Cal Newport' },
];

function Books() {
  return (
    <div className="books">
      <h1>Our Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Books;