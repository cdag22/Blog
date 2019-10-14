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