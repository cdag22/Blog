import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import faker from 'faker';

import reducers from '../reducers';

const posts = Array.from({ length: 3}, (_, number) => {
  return {
    number,
    title: faker.lorem.words(),
    body: faker.lorem.paragraphs(),
    isDisabled: true,
  };
});

const newPost = {
  title: '',
  body: '',
  number: posts.length,
  isDisabled: true,
}

const initialState = {
  posts,
  newPost
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));