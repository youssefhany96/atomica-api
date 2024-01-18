import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <span className="brand" onClick={() => navigate('/')}>My Blog</span>
      <div>
        <a href="/" onClick={(e) => {e.preventDefault(); navigate('/');}}>Home</a>
        <a href="/posts/new" onClick={(e) => {e.preventDefault(); navigate('/posts/new');}}>Add New Post</a>
      </div>
    </nav>
  );
};

export default NavBar;