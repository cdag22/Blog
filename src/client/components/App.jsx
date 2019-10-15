import React from 'react';
import { renderRoutes } from 'react-router-config';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from '../../assets/styles/main.scss';

import Navigation from './Navigation.jsx';

const App = ({ route }) => (
  <div className="page-container">
      <Navigation />
      {renderRoutes(route.routes)}
  </div>
);

export default withStyles(s)(App);