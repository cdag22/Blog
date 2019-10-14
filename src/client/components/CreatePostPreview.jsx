import React from 'react';


const CreatePostPreview = ({ title, body, number, isDisabled }) => {

  return (
    <div className="post-container preview-box">
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
    </div>
  );
};

export default CreatePostPreview;