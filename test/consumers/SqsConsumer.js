const { Consumer } = require('sqs-consumer');
const { sqsConfig } = require('../config/config');
const wait = require('../helpers/wait');
const sqs = require('../sqs/sqs');

class SqsConsumer {
  constructor(consumerId) {
    this.consumer = Consumer.create({
      queueUrl: sqsConfig.queueUrl,
      handleMessage: (message) => {
        const now = new Date();
        wait().then(() => {
          const { accountId, jobId } = JSON.parse(message.Body);
          console.log(`consumer ${consumerId} processed in ${new Date() - now}ms`);
          console.log(`message ${accountId}-${jobId}`);
        });
      },
      sqs,
    });
  }

  start() {
    this.consumer.start();
  }
}

module.exports = SqsConsumer;
