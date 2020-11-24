const sqs = require('./sqs/sqs');
const { sqsConfig } = require('./config/config');

const addMessagesForAcc = async (accountId) => {
  const numberOfMessages = Math.round(Math.random() * 10);

  for(let i = 0; i < numberOfMessages; i++) {
    await sqs.sendMessage({
      MessageBody: JSON.stringify({
        accountId,
        jobId: i,
      }),
      QueueUrl: sqsConfig.queueUrl,
      MessageGroupId: String(accountId),
    }).promise()
  }
}

const generate = async () => {
  const now = new Date();
  const accountIds = [];
  for (let i = 1; i <= 1000; i++) {
    accountIds.push(i);
  }
  await Promise.all(accountIds.map(accountId => addMessagesForAcc(accountId)))
  console.log(`generated in ${new Date() - now} ms`);
}

generate();

