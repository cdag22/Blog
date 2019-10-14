import { combineReducers } from 'redux';

import postReducer from './postReducer.js';
import newPostReducer from './newPostReducer.js';

export default combineReducers({
  posts: postReducer,
  newPost: newPostReducer,
});