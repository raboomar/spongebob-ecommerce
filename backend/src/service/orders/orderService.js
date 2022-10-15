const appUserUtils = require("../utils/appUserUtils");
const { validationResult } = require("express-validator");
const jwtUtils = require("../utils/jwtUtils");
const dynamoClient = require("../../../config/aws/dynamo");
const getUserOrders = async (request, response) => {
  const { username } = request.user;
  const user = await appUserUtils.findUserByUsername(username);
  const orders = user.Item.orders;
  response.status(200).json({ orders });
};

const addOrder = async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  const token = request.header("x-auth-token");
  const decoded = jwtUtils.decode(token);
  let username = decoded?.user?.username;
  try {
    username = username ? username : "Guest";
    const user = await appUserUtils.findUserByUsername(username);
    await addOrderToUser(user, request.body);
    return response.status(200).json({ msg: "Order added" });
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const addOrderToUser = async (user, newOrder) => {
  const orders = user.Item.orders;

  const updatedOrder = [...orders, newOrder];

  await dynamoClient.dynamoClient
    .update({
      TableName: "AppUser",
      Key: {
        username: user.Item.username,
      },
      UpdateExpression: `set orders = :orders`,
      ExpressionAttributeValues: {
        ":orders": updatedOrder,
      },
    })
    .promise();
};

module.exports = { getUserOrders, addOrder };
