'use strict';

function UserController (app) {
  let Engine = require('tingodb')();
  let db = new Engine.Db('./db', { });
  let users = db.collection('users');

  app.post('/api/user', function (req, res) {
    users.insert(req.body);
    res.json(req.body);
  });

  app.get('/api/user', function (req, res) {
    users
      .find({ })
      .toArray((err, users) => res.json(users));
  });

//  app.delete('/api/user', function (req, res) {
//
//  });
}

module.exports = UserController;