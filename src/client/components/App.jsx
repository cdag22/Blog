import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../../assets/styles/main.scss';

import Navigation from './Navigation.jsx';
import Main from './Main.jsx';

import Posts from '../containers/Posts.jsx';
import CreatePost from '../containers/CreatePost.jsx';

const App = () => (
  <div className="page-container">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/createPost">
          <CreatePost />
        </Route>
      </Switch>
  </div>
);

export default App;