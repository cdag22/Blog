import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ }) => (
  <nav className="navbar navbar-expand-lg navbar-light rounded">
    <Link to="/" className="navbar-brand"><i className="fas fa-chevron-left chevron-icon"></i>    <span className="brand-word">Blog</span>    <i className="fas fa-chevron-right chevron-icon"></i></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-nav" aria-controls="navbar-main-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse nav-custom-div" id="navbar-main-nav">
      <ul className="navbar-nav navbar-custom">
        <li className="nav-item active">
          <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/posts" className="nav-link">All Posts</Link>
        </li>
        <li className="nav-item">
          <Link to="/createPost" className="nav-link">Create Post</Link>
        </li>
      </ul>
      {/* <form className="form-inline my-2 my-md-0">
        <div class="input-group search-form">
          <input className="form-control search-input" type="text" placeholder="Search" aria-label="Search" />
          <div class="input-group-append">
            <span class="input-group-text search-button" id="basic-addon2"><i className="fas fa-search search-icon"></i></span>
          </div>
        </div>
      </form> */}
    </div>
  </nav>
);

export default Navigation;