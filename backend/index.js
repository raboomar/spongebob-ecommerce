const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const v1MenuRouter = require("./src/routes/menu/menuRoutes");
const v1AppUserRouter = require("./src/routes/appUser/appUserRoutes");
const v1OrdersRouter = require("./src/routes/order/orderRoutes");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/menu", v1MenuRouter);
app.use("/api/v1/user", v1AppUserRouter);
app.use("/api/v1/order", v1OrdersRouter);
app.get("/", (request, response) => {
  response.send("hello world!!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("app started at ", 5000);
});
