const {
  SQS_ENDPOINT,
  SQS_REGION,
  SQS_ACCESS_KEY_ID,
  SQS_SECRET_ACCESS_KEY,
  SQS_API_VERSION,
  SQS_QUEUE,
} = process.env;

module.exports = {
  sqsConfig: {
    queueUrl: `${SQS_ENDPOINT}/queue/${SQS_QUEUE}`,
    region: SQS_REGION,
    endpoint: SQS_ENDPOINT,
    accessKeyId: SQS_ACCESS_KEY_ID,
    secretAccessKey: SQS_SECRET_ACCESS_KEY,
    apiVersion: SQS_API_VERSION,
    sqsQueue: SQS_QUEUE,
  }
}
