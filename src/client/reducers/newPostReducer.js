import actions from '../actions';

export default function newPostReducer(newPost = {}, action) {
  const newPostCopy = Object.assign({}, newPost);

  switch(action.type) {
    case actions.NEW_POST_TITLE_CHANGE:
      newPostCopy.title = action.payload;
      return newPostCopy;
    case actions.NEW_POST_BODY_CHANGE:
      newPostCopy.body = action.payload;
      return newPostCopy;
    case actions.CREATE_POST:
      return {
        title: '',
        body: '',
        number: newPostCopy.number + 1,
        isDisabled: true,
      };
    case actions.DELETE_POST:
      newPost.number--;
      return newPost;
    default:
      return newPostCopy;
  }
};