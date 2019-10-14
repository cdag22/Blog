import React from 'react';
import { connect } from 'react-redux';

import CreatePostForm from './CreatePostForm.jsx';
import Post from './Post.jsx';

const CreatePost = ({ }) => {

  return (
    <div className="posts-box">
      <CreatePostForm />
      <Post />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);