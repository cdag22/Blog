import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import serialize from 'serialize-javascript';

import renderHTML from './renderHTML.js';
import Routes from '../client/components/Routes.jsx';

export default function renderIso(store, path) {
  let css = new Set();
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

  const reactString = renderToString(
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <StaticRouter location={path}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </StyleContext.Provider>
    </Provider>
  );

  return renderHTML(serialize(store.getState()), reactString);
};