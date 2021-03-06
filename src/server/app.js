'use strict';

let express = require('express');
let user = require('./controllers/user');
let bodyParser = require('body-parser');
let jwtMiddleware = require('./config/security');
let corsMiddleware = require('./config/cors');
let mongoose = require('mongoose');
let config = require('./config');
let log4js = require('log4js');
let logzio = require('./config/logzio-logging');

function init () {
  let app = express();
  mongoose.connect(config.mongodb.url);
  log4js.configure(config.log4js);
  log4js.addAppender(logzio.appender(config.logzio.key));

  app.use(jwtMiddleware);
  app.use(corsMiddleware);
  app.use(bodyParser.json());

  app.use('/api/user', user);

  app.use(function uncaughtErrorHandler (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: { message: err.message } });
    console.error(err);
  });

  let port = config.port;
  app.listen(port, () => console.log(`App listening on port ${port}!`));
}

init ();
