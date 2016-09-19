'use strict';

let express = require('express');
let user = require('./user');
let bodyParser = require('body-parser');
let app = express();
let configureSecurity = require('./config/security');

function init () {
  configureSecurity(app);

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
  });

  app.use(bodyParser.json());

  app.use('/api/user', user);

  app.listen(3000, () => console.log('App listening on port 3000!'));
}

init ();
