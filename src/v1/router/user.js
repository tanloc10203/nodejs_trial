const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const router = Router();

router
  .route("/")
  .get(userController.getAll)
  .delete(userController.deleteAll)
  .post(userController.create);

router
  .route("/:id")
  .patch(userController.update)
  .delete(userController.delete)
  .get(userController.getById);

module.exports = router;
