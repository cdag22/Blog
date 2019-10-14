import React from 'react';
import { connect } from 'react-redux';

import Post from './Post.jsx';
import { editPost, updatePost, deletePost } from '../actionCreators';

const Posts = ({ posts, onEditClick, onUpdateClick, onDeleteClick }) => {

  return (
    <div className="posts-box">
      <h2 className="posts-title"><span className="posts-title-start-span">P</span><span className="posts-title-span">osts</span></h2>
      {posts.map((post, i) => (
        <div className="post-outer-box" key={i}>
          <div className="post-number">{post.number + 1}</div>
          <Post
            {...post}
            onEditClick={onEditClick}
            onUpdateClick={onUpdateClick}
            onDeleteClick={onDeleteClick}
          />
        </div>
      ))}
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
    onEditClick: post => dispatch(editPost(post)),
    onUpdateClick: post => dispatch(updatePost(post)),
    onDeleteClick: post => dispatch(deletePost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);