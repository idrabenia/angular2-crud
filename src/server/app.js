'use strict';

let express = require('express');
let user = require('./user');
let bodyParser = require('body-parser');
let jwtMiddleware = require('./config/security');
let corsMiddleware = require('./config/cors');
let mongoose = require('mongoose');
let config = require('./config');

function init () {
  let app = express();
  mongoose.connect(config.mongodb.url);

  app.use(jwtMiddleware);
  app.use(corsMiddleware);
  app.use(bodyParser.json());

  app.use('/api/user', user);

  app.use(function uncaughtErrorHandler (err, req, res, next) {
    res.json({ error: { message: err.message } });
    console.error(err);
  });

  let port = config.port;
  app.listen(port, () => console.log(`App listening on port ${port}!`));
}

init ();
