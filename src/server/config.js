'use strict';

module.exports = {
  port: process.env.PORT || 3000,
  mongodb: {
    url: 'mongodb://localhost:27017/angular2Probe'
  },
  auth0: {
    secret: new Buffer('ehnZ63AZacokI0zATk1iYsHDLS1V_EKB657JMY0saAwJi8pzLFxJlQWkk_H6BmSh', 'base64'),
    audience: 'OGPrgFzCBt6Yr6zRY88bGRDCotTQIVVu'
  },
  log4js: {
    appenders: [
      {
        type: 'console',
        layout: { type: 'pattern', pattern: '%d{dd/MM hh:mm} %-5p %m' }
      }, {
        type: 'file',
        filename: 'logs.log',
        maxLogSize: 10240,
        backups: 3,
        layout: { type: 'pattern', pattern: '%d{dd/MM hh:mm} %-5p %m' }
      }
    ],
    replaceConsole: true
  },
  logzio: {
    key: 'QVHxtRWixocpGKEpeuWbKEWcWfsgpQFt'
  }
};