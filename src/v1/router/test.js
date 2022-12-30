const { Router } = require("express");
const testController = require("../controllers/test.controller");
const router = Router();

router
  .route("/")
  .get(testController.getAll)
  .delete(testController.deleteAll)
  .post(testController.create);

router
  .route("/:id")
  .patch(testController.update)
  .delete(testController.delete)
  .get(testController.getById);

module.exports = router;
