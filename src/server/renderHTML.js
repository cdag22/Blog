import { Helmet } from 'react-helmet';

export default function renderHTML(store, reactString) {
  const helmet = Helmet.renderStatic();
  
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/80b6e84bc6.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="client.css">
  <title>Blog</title>
  </head>
  <body>
    <div id="root">${reactString}</div>
    <script>window.__INITIAL_STATE__=${store}</script>
    <script type="text/javascript" src="/runtime.bundle.js"></script><script type="text/javascript" src="/vendors.bundle.js"></script><script type="text/javascript" src="/client.bundle.js"></script></body>
  </html>`
}