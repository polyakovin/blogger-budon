const { Server } = require('http');
const parser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./src/router.js');
const host = process.env.PORT || 3000;

app
  .disable('x-powered-by')
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use('/api/posts', router);

Server(app).listen(host, () => console.log('http://localhost:' + host));
