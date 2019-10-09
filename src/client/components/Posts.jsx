import React from 'react';

import Post from './Post.jsx';

const Posts = ({ }) => {

  return (
    <div className="posts-box">
      <h2 className="posts-title">Posts</h2>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;