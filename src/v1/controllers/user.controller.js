const { UserModel } = require("../models/User.model");
const UserService = require("../services/user.service");

class UserController {
  constructor() {
    this.db = new UserService(UserModel);
  }

  getAll = async (req, res, next) => {
    return this.db.getAll(req, res, next);
  };

  getById = async (req, res, next) => {
    return this.db.getById(req, res, next);
  };

  create = async (req, res, next) => {
    return this.db.create(req, res, next);
  };

  update = async (req, res, next) => {
    return this.db.update(req, res, next);
  };

  delete = async (req, res, next) => {
    return this.db.delete(req, res, next);
  };

  deleteAll = async (req, res, next) => {
    return this.db.deleteAll(req, res, next);
  };
}

module.exports.userController = new UserController();
