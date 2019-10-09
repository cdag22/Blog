import React from 'react';
import faker from 'faker';

const Post = ({ }) => {

  return (
    <div className="post-container">
      <h3 className="post-title">title</h3>
      <p className="post-body">{faker.lorem.paragraphs()}</p>
    </div>
  );
};

export default Post;