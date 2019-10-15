import { createStore } from 'redux';

import reducers from '../reducers';

export default (initialState, middleware) => createStore(reducers, initialState, middleware);