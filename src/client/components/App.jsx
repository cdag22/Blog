import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../../assets/styles/main.scss';
import Navigation from './Navigation.jsx';
import Main from './Main.jsx';
import Posts from './Posts.jsx';
import CreatePost from './CreatePost.jsx';

const App = () => (
  <div className="container-fluid">
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