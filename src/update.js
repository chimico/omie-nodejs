const omie = require('./omie');

exports.handler = async (event) => {
  await omie(123, 123).general.customers.retrieve({integrationCode: 2});
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
    teste: JSON.stringify('Example'),
  };
  return response;
};

