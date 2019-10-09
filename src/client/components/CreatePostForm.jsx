import React from 'react';
import { Link } from 'react-router-dom';

const CreatePostForm = ({ }) => {

  return (
    <form action="" className="post-form-container">
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Title"/>
      </div>
      <div className="form-group">
        <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
      </div>
      <Link to="posts" className="btn btn-large btn-block bg-blue">Create</Link>
    </form>
  );
};

export default CreatePostForm;