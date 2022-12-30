const TestModel = require("../models/Test.model");
const Test = require("../services/test.service");

const testController = {
  db: new Test(TestModel),

  getAll(req, res, next) {
    return testController.db.getAll(req, res, next);
  },
  getById(req, res, next) {
    return testController.db.getById(req, res, next);
  },
  create(req, res, next) {
    return testController.db.create(req, res, next);
  },
  update(req, res, next) {
    return testController.db.update(req, res, next);
  },
  delete(req, res, next) {
    return testController.db.delete(req, res, next);
  },
  deleteAll(req, res, next) {
    return testController.db.deleteAll(req, res, next);
  },
};

module.exports = testController;
