import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <h1>About Our Book Store</h1>
      <p>Welcome to the Online Book Store! We are passionate about bringing the best books to readers around the world. Our curated collection features timeless classics and modern bestsellers across various genres including self-help, personal finance, fiction, and productivity.</p>
      <p>Whether you're looking to build better habits, achieve financial freedom, or dive into an inspiring story, we have something for everyone.</p>
      <div className="nav-links">
        <Link to="/">Back to Home</Link>
        <Link to="/books">Browse Books</Link>
      </div>
    </div>
  );
}

export default About;