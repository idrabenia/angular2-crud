'use strict';

module.exports = {
  port: process.env.PORT || 3000,
  mongodb: {
    url: 'mongodb://localhost:27017/angular2Probe'
  },
  auth0: {
    secret: new Buffer('ehnZ63AZacokI0zATk1iYsHDLS1V_EKB657JMY0saAwJi8pzLFxJlQWkk_H6BmSh', 'base64'),
    audience: 'OGPrgFzCBt6Yr6zRY88bGRDCotTQIVVu'
  }
};