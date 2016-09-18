'use strict';

let express = require('express');
let registerUserRoutes = require('./user');
let app = express();
let configureSecurity = require('./config/security');

app.configure(() => {
  configureSecurity(app);

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
  });

  app.use(express.bodyParser());
  app.use(app.router);

  registerUserRoutes(app);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});