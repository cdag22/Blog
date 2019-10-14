import React from 'react';
import { Link } from 'react-router-dom';
import serialize from 'serialize-javascript';

const CreatePostForm = ({ number, isDisable, onTitleChange, onBodyChange, onCreateNewPost }) => {

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
          className="form-control create-post-body"
          cols="50"
          rows="10"
          placeholder={"Today I..."}
          ref={bodyRef}
          onChange={(e) => (e.preventDefault(), onBodyChange(bodyRef.current.value))}
        >
        </textarea>
      </div>
      <Link
        to="/posts"
        className="btn btn-block create-post-btn"
        onClick={() => onCreateNewPost({
          title: serialize(titleRef.current.value),
          body: serialize(bodyRef.current.value),
          number,
          isDisable
        })}
        >
        Create new post
      </Link>
    </form>
  );
};

export default CreatePostForm;