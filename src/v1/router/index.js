const userRoute = require("./user");
const testRoute = require("./test");

function initRoute(app) {
  app.get("/", (req, res) => {
    res.send("Server on running with status code 200. Success <3.");
  });
  app.use("/api/v1/user", userRoute);
  app.use("/api/v1/test", testRoute);
  return app;
}

module.exports = initRoute;
