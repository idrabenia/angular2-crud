'use strict';

let jwt = require('express-jwt');

function configureSecurity(app) {
  let jwtCheck = jwt({
    secret: new Buffer('ehnZ63AZacokI0zATk1iYsHDLS1V_EKB657JMY0saAwJi8pzLFxJlQWkk_H6BmSh', 'base64'),
    audience: 'OGPrgFzCBt6Yr6zRY88bGRDCotTQIVVu'
  });

  app.use('/api/user', function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
      return;
    }
    else {
      return jwtCheck(req, res, next);
    }
  });
}

module.exports = configureSecurity;

