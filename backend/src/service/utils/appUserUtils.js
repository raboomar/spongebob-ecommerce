const dynamoClient = require("../../../config/aws/dynamo");

const findUserByUsername = async (username) => {
  return await dynamoClient.dynamoClient
    .get({
      TableName: "AppUser",
      Key: {
        username: username,
      },
    })
    .promise();
};

module.exports = { findUserByUsername };
