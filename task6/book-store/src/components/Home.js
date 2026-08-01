import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Online Book Store</h1>
      <p>Your one-stop destination for amazing books and authors.</p>
      <div className="nav-links">
        <Link to="/books">Browse Books</Link>
        <Link to="/authors">Meet Our Authors</Link>
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
}

export default Home;