import express from 'express';
import faker from 'faker';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import renderIso from './renderIso.js';
import buildStore from '../client/store';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
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
  };
  
  const store = buildStore({ posts, newPost }, applyMiddleware(thunk));
  const html = renderIso(store, req.path);

  res.status(200).send(html);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));