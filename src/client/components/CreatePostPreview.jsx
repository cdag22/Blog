import React from 'react';


const CreatePostPreview = ({ title, body, number, isDisabled }) => {

  return (
    <div className="post-container">
      <h3
        className="post-title"
      >
        {title}
      </h3>
      <div
        className="post-body"
      >
        {body}
      </div>
      {/* <div className="post-buttons">
        <button
          className="btn btn-lg btn-outline-warning"
        >
          Edit
        </button>
        <button
          className="btn btn-lg btn-outline-danger"
        >
          Delete
        </button>
      </div> */}
    </div>
  );
};

export default CreatePostPreview;