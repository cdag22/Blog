import React from 'react';
import { connect } from 'react-redux';

import CreatePostForm from '../components/CreatePostForm.jsx';
import CreatePostPreview from '../components/CreatePostPreview.jsx';

import { createPost, newPostTitleChange, newPostBodyChange } from '../actionCreators';

const CreatePost = ({ newPost, onTitleChange, onBodyChange, onCreateNewPost }) => {

  return (
    <div className="posts-box">
      <CreatePostForm
        {...newPost}
        onTitleChange={onTitleChange}
        onBodyChange={onBodyChange}
        onCreateNewPost={onCreateNewPost}
      />
      <CreatePostPreview
        {...newPost}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    newPost: state.newPost,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTitleChange: title => dispatch(newPostTitleChange(title)),
    onBodyChange: body => dispatch(newPostBodyChange(body)),
    onCreateNewPost: post => dispatch(createPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);