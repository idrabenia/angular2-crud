'use strict';

let uuid = require('node-uuid');

function UserController (app) {
  let Engine = require('tingodb')();
  let db = new Engine.Db('./db', { });
  let users = db.collection('users');

  app.post('/api/user', function (req, res) {
    let user = req.body;
    user.id = uuid.v4();
    users.insert(req.body);

    res.json(user);
  });

  app.get('/api/user', function (req, res) {
    users
      .find({ })
      .toArray((err, users) => res.json(users));
  });

  app.delete('/api/user/:userId', function (req, res) {
    let userId = req.params.userId;
    users.remove({ id: userId });

    res.json({ });
  });
}

module.exports = UserController;