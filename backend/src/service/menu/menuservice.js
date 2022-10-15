const dynamoClient = require("../../../config/aws/dynamo");
const TABLE_NAME = "kurst-krab";
const params = { TableName: TABLE_NAME };

const getMenu = async (request, response) => {
  try {
    const menu = await dynamoClient.dynamoClient.scan(params).promise();
    response.json(menu.Items);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("Server side error");
  }
};

const getMenuItem = async (request, response) => {
  try {
    const menuItem = await dynamoClient.dynamoClient
      .get({
        TableName: "kurst-krab",
        Key: {
          id: request.params.id,
        },
      })
      .promise();

    response.status(200).json([menuItem.Item]);
  } catch (error) {
    response.status(500).send("Server side error");
  }
};

module.exports = { getMenu, getMenuItem };
