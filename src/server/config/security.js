'use strict';

let jwt = require('express-jwt');
let config = require('./../config');


function JwtMiddleware () {
  let self = this;
  let jwtCheck = jwt(config.auth0);

  self.validate = function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
      return;
    } else {
      return jwtCheck(req, res, next);
    }
  };
}

module.exports = new JwtMiddleware().validate;

