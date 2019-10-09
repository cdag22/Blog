import React from 'react';

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

export default CreatePost;