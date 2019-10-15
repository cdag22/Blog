import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import Routes from './components/Routes.jsx';
import buildStore from './store';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => removeCss.forEach(dispose => dispose());
};

ReactDOM.hydrate(
  <Provider store={buildStore(window.__INITIAL_STATE__, composeEnhancers(applyMiddleware(thunk)))}>
    <StyleContext.Provider value={{ insertCss }}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </StyleContext.Provider>
  </Provider>
  , document.getElementById('root'));