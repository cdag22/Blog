import React from 'react';
import { Link } from 'react-router-dom';

const CreatePostForm = ({ title, body, number, isDisable, onTitleChange, onBodyChange, onCreateNewPost }) => {

  let titleRef = React.createRef();
  let bodyRef = React.createRef();

  return (
    <form action="" className="post-form-container">
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Title"
          ref={titleRef}
          onChange={(e) => (e.preventDefault(), onTitleChange(titleRef.current.value))}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          cols="50"
          rows="10"
          ref={bodyRef}
          onChange={(e) => (e.preventDefault(), onBodyChange(bodyRef.current.value))}
        >
        </textarea>
      </div>
      <Link
        to="/posts"
        className="btn btn-large btn-block bg-blue"
        onClick={() => onCreateNewPost({
          title: titleRef.current.value,
          body: bodyRef.current.value,
          number,
          isDisable
        })}
        >
        Create
      </Link>
    </form>
  );
};

export default CreatePostForm;