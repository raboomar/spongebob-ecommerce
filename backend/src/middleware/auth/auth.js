const jwtUtils = require("../../service/utils/jwtUtils");

module.exports = function (request, response, next) {
  const token = request.header("x-auth-token");
  if (!token) {
    return response.status(401).json({ msg: "No token authorization denied" });
  }

  try {
    const decoded = jwtUtils.decode(token);
    request.user = decoded.user;
    next();
  } catch (error) {
    response.status(401).json({ msg: "Token is not valid" });
  }
};
