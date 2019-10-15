import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = ({ }) => (
    <nav className="navbar navbar-expand-lg">
    <Link to="/" className="navbar-brand"><i className="fas fa-angle-double-right chevron-icon"></i>  <span className="brand-word">Blog</span></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse nav-list-container" id="navbarSupportedContent">
      <ul className="navbar-list">
        <NavLink exact to="/" className="navbar-link" activeClassName="active-tab">Home</NavLink>
        <NavLink to="/posts" className="navbar-link" activeClassName="active-tab">All Posts</NavLink>
        <NavLink to="/createPost" className="navbar-link" activeClassName="active-tab">Create Post</NavLink>
      </ul>
    </div>
  </nav>
);

export default Navigation;