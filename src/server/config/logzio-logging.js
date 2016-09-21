'use strict';

let logzio = require('logzio-nodejs');


function logzioAppender (key) {
  let logger = logzio.createLogger({ token: key, host: 'listener.logz.io' });

  return function(loggingEvent) {
    logger.log(loggingEvent);
  };
}

function configure(config) {
  var key = config.key;

  if (!key) {
    throw new Error('"key" is mandatory option');
  }

  return logzioAppender(key);
}

module.exports.appender = logzioAppender;
module.exports.configure = configure;