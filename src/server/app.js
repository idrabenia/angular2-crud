'use strict';

let express = require('express');
let user = require('./user');
let bodyParser = require('body-parser');
let jwtMiddleware = require('./config/security');
let corsMiddleware = require('./config/cors');

function init () {
  let app = express();

  app.use(jwtMiddleware);
  app.use(corsMiddleware);
  app.use(bodyParser.json());

  app.use('/api/user', user);

  app.use(function uncaughtErrorHandler (err, req, res, next) {
    res.json({ error: { message: err.message } });
    console.error(err);
  });

  app.listen(3000, () => console.log('App listening on port 3000!'));
}

init ();
