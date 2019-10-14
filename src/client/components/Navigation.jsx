import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = ({ }) => (
  <nav className="navbar">
    <Link to="/" className="navbar-brand"><i className="fas fa-angle-double-right chevron-icon"></i>  <span className="brand-word">Blog</span></Link>
    <div className="nav-list-container">
      <ul className="navbar-list">
        <NavLink exact to="/" className="navbar-link" activeClassName="active">Home</NavLink>
        <NavLink to="/posts" className="navbar-link" activeClassName="active">All Posts</NavLink>
        <NavLink to="/createPost" className="navbar-link" activeClassName="active">Create Post</NavLink>
      </ul>
    </div>
  </nav>
);

export default Navigation;