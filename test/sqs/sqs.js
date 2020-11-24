const AWS = require('aws-sdk');
const { sqsConfig } = require('../config/config');

AWS.config.update({
  region: sqsConfig.region,
  endpoint: sqsConfig.endpoint,
  accessKeyId: sqsConfig.accessKeyId,
  secretAccessKey: sqsConfig.secretAccessKey,
  apiVersion: sqsConfig.apiVersion,
});

module.exports = new AWS.SQS();
