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

  app.post('/api/user', safe((req, res) => {
    return User
      .create(req.body)
      .then(user => res.json(user));
  }));

  app.get('/api/user', safe((req, res) => {
    return User
      .find()
      .then(users => res.json(users));
  }));

  app.delete('/api/user/:userId', safe((req, res) => {
    let userId = req.params.userId;

    return User
      .findByIdAndRemove(userId)
      .then(() => res.json({ }));
  }));

  function safe(callback) {
    return (req, res) =>
      callback(req, res).catch(error => res.json({ error }));
  }
}

module.exports = UserController;