import React from 'react';

import App from './App.jsx';
import Main from './Main.jsx';
import Posts from '../containers/Posts.jsx';
import CreatePost from '../containers/CreatePost.jsx';
import NotFound from './NotFound.jsx';

export default [
  {
    component: App,
    routes: [
      {
        component: Main,
        path: '/',
        exact: true,
      },
      {
        component: Posts,
        path: '/posts',
        exact: true,
      },
      {
        component: CreatePost,
        path: '/createPost',
        exact: true,
      },
      {
        component: NotFound,
        route: '*',
      },
    ],
  },
];