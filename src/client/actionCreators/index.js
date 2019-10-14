import actions from '../actions';

export const createPost = post => {
  return {
    type: actions.CREATE_POST,
    post,
  };
};

export const editPost = post => {
  return {
    type: actions.EDIT_POST,
    post,
  }
};

export const updatePost = post => {
  return {
    type: actions.UPDATE_POST,
    post,
  };
};

export const deletePost = post => {
  return {
    type: actions.DELETE_POST,
    post,
  };
};

export const newPostTitleChange = title => {
  return {
    type: actions.NEW_POST_TITLE_CHANGE,
    payload: title,
  };
};

export const newPostBodyChange = body => {
  return {
    type: actions.NEW_POST_BODY_CHANGE,
    payload: body,
  };
};