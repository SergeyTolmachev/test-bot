const sqs = require('../sqs/sqs');
const wait = require('./wait');

const checkConnection = async(retry = 1) => {
  try {
    console.log(`SQS connection ${retry} retry`);
    await sqs.listQueues({}).promise();
    console.log(`SQS connected`);
  } catch (error) {
    await wait();
    return checkConnection(retry + 1);
  }
}

module.exports = checkConnection;
