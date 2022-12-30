const Db = require("../database/db.class");

class CommonService extends Db {
  constructor(db) {
    super(db);
  }

  async getAll(req, res, next) {
    try {
      const query = req.query;
      const limit = parseInt(query._limit) || 5;
      const page = Math.max(0, query._page || 1);

      console.log({ limit, page });

      const response = await this.handleFindAll({ limit, page });

      res.json({
        error_code: 200,
        error_message: "",
        message: "Get all success",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const id = req.params.id;
      res.json({
        error_code: 200,
        error_message: "",
        message: "Get by id=" + id + " success",
        data: await this.handleFindById(id),
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      res.send("Create success");
    } catch (error) {
      next(error);
    }
  }

  update(req, res) {
    const id = req.params.id;
    res.send("Update user success by id=" + id);
  }

  async delete(req, res) {
    const id = req.params.id;
    const response = await this.handleDeleteById(id);

    res.json({
      error_code: 204,
      error_message: "",
      message: `Delete user id = ${response._id} success`,
    });
  }

  async deleteAll(req, res) {
    res.send("Delete all user");
  }
}

module.exports = CommonService;
