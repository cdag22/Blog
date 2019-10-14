import React from 'react';

const Post = ({ title, body, number, isDisabled, onEditClick, onUpdateClick, onDeleteClick }) => {

  const post = { title, body, number, isDisabled };

  let editSave = isDisabled ? 
    (e) => (e.preventDefault(), onEditClick(post)) :
    (e) => (e.preventDefault(), onUpdateClick(post));

  return (
    <div className="post-container">
      <h3 className="post-title">{title}</h3>
      <div
        className="post-body"
        contentEditable={(!isDisabled).toString()}
      >
        {body}
      </div>
      <div className="post-buttons">
        <button
          className="btn btn-lg btn-outline-warning"
          onClick={editSave}
        >
          {isDisabled ? 'Edit' : 'Save'}
        </button>
        <button
          className="btn btn-lg btn-outline-danger"
          onClick={(e) => (e.preventDefault(), onDeleteClick(post))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;