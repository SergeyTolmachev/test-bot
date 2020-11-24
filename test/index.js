const numCPUs = require('os').cpus().length;
const SqsConsumer = require('./consumers/SqsConsumer');
const checkConnection = require('./helpers/checkConnection');

const bootstrap = async () => {
  await checkConnection();
  for (let i = 1; i <= numCPUs; i++) {
    const consumer = new SqsConsumer(i);
    await consumer.start();
  }
};

bootstrap();


