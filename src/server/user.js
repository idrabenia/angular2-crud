'use strict';

let mongoose = require('mongoose');
let uuid = require('node-uuid');
let _ = require('lodash');
let router = require('express').Router();


module.exports = (function () {
  mongoose.connect('mongodb://localhost:27017/angular2Probe');

  let User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: { type: String, required: true }
  });

  function safe(callback) {
    return (req, res) =>
      callback(req, res).catch(error => res.json({ error }));
  }

  router.post('/', safe((req, res) => {
    return User
      .create(req.body)
      .then(user => res.json(user));
  }));

  router.get('/', safe((req, res) => {
    return User
      .find()
      .then(users => res.json(users));
  }));

  router.delete('/:userId', safe((req, res) => {
    let userId = req.params.userId;

    return User
      .findByIdAndRemove(userId)
      .then(() => res.json({ }));
  }));

  return router;
})();