'use strict';

let mongoose = require('mongoose');
let uuid = require('node-uuid');
let _ = require('lodash');
let router = require('express').Router();


module.exports = (function () {
  let User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: { type: String, required: true }
  });

  function safe(callback) {
    return (req, res) =>
      callback(req, res).catch(error => res.json({ error }));
  }

  router.post('/', safe(async (req, res) => {
    const user = await User.create(req.body);

    res.json(user);
  }));

  router.get('/', safe(async (req, res) => {
    res.json(await User.find());
  }));

  router.get('/:userId', safe(async (req, res) => {
    let user = await User.findById(req.params.userId);

    res.json(user);
  }));

  router.post('/:userId', safe(async (req, res) => {
    let userId = req.params.userId;

    await User.update({ '_id': userId }, req.body);
    const user = await User.findById(userId);

    res.json(user);
  }));

  router.delete('/:userId', safe(async (req, res) => {
    let userId = req.params.userId;

    await User.findByIdAndRemove(userId);

    res.json({ });
  }));

  return router;
})();