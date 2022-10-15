const dynamoClient = require("../../../config/aws/dynamo");
const { validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");
const bcryptUtils = require("../utils/bcryptUtils");
const jwtUtils = require("../utils/jwtUtils");
const appUserUtils = require("../utils/appUserUtils");
const TABLE_NAME = "AppUser";
const params = {
  TableName: TABLE_NAME,
};

const createUser = async (request, response) => {
  try {
    const error = validationResult(request);
    const { username, name, password, role } = request.body;
    if (!error.isEmpty()) {
      return response.status(400).json(error.array());
    }

    const findUser = await appUserUtils.findUserByUsername(username);

    if (Object.keys(findUser).length !== 0) {
      return response
        .status(400)
        .json({ error: [{ msg: "User already exists" }] });
    }
    const hashedPassword = await bcryptUtils.hashPassword(password);

    await dynamoClient.dynamoClient
      .put({
        Item: {
          id: uuidv4(),
          username,
          password: hashedPassword,
          name,
          role,
          orders: [],
        },
        TableName: TABLE_NAME,
      })
      .promise();

    const payload = {
      user: {
        username,
        role,
        name,
      },
    };

    const token = jwtUtils.generateAccessToken(payload);
    response.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
    response.status(500).send(error.message);
  }
};

const login = async (request, response) => {
  const error = validationResult(request);
  if (!error.isEmpty()) {
    return response.status(400).json(error.array());
  }
  const { username, password } = request.body;
  try {
    const findUser = await appUserUtils.findUserByUsername(username);

    if (Object.keys(findUser).length === 0) {
      return response
        .status(400)
        .json({ error: [{ msg: "Invalid credentials." }] });
    }

    const isMatched = await bcryptUtils.comparePassword(
      password,
      findUser.Item.password
    );
    if (Object.keys(findUser).length === 0 || !isMatched) {
      return response
        .status(400)
        .json({ errors: [{ msg: "Invalid credentials." }] });
    }

    const { name, role } = findUser.Item;

    const payload = {
      user: {
        username,
        role,
        name,
      },
    };
    const token = jwtUtils.generateAccessToken(payload);
    response.status(200).json({ token });
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = { createUser, login };
