'use strict';

let express = require('express');
let registerUserRoutes = require('./user');
let app = express();

app.configure(() => {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(express.bodyParser());
  app.use(app.router);

  registerUserRoutes(app);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});