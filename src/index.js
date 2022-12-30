const express = require("express");
const bodyParser = require("body-parser");
const initRoute = require("./v1/router");
const catch_error_server = require("./v1/middleware/catch_error_server");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// connect db
require("./v1/database/init.mongoose");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init routes
initRoute(app);

// middleware catch errors from server
catch_error_server(app);

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
