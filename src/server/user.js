'use strict';

let mongoose = require('mongoose');
let uuid = require('node-uuid');
let _ = require('lodash');


function UserController (app) {
  mongoose.connect('mongodb://localhost:27017/angular2Probe');

  let User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: { type: String, required: true }
  });

  app.post('/api/user', function (req, res) {
    User
      .create(req.body)
      .then(user => res.json(user))
      .catch(sendError(res));
  });

  app.get('/api/user', function (req, res) {
    User
      .find()
      .then(users => res.json(users))
      .catch(sendError(res));
  });

  app.delete('/api/user/:userId', function (req, res) {
    let userId = req.params.userId;

    User
      .findByIdAndRemove(userId)
      .then(() => res.json({ }))
      .catch(sendError(res));
  });

  function sendError (res) {
    return error => res.json({ error })
  }
}

module.exports = UserController;