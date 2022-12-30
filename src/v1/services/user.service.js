const CommonService = require("./common.service");

class UserService extends CommonService {
  // @override
  async create(req, res, next) {
    try {
      const data = req.body;

      if (!data.email || !data.password || !data.fullName) {
        return res.status(200).json({
          error_code: 204,
          error_message: "",
          message: "Missing parameter email, password, fullName",
        });
      }

      const findEmail = await this.handleFindOne({ email: data.email });

      if (findEmail) {
        res.status(200).json({ error_code: 200, error_message: "", message: "Email is exists" });
        return;
      }

      const response = await this.handleCreate(data);

      res.json({
        error_code: 201,
        error_message: "",
        message: "Create success",
        id: response._id,
      });
    } catch (error) {
      next(error);
    }
  }

  // @override.
  async update(req, res) {
    const data = req.body;
    const id = req.params.id;

    if (data.email) {
      const findEmail = await this.handleFindOne({ email: data.email });

      if (findEmail && findEmail._id.toString() !== id) {
        return res.json({
          error_code: 200,
          error_message: "",
          message: "Email is exists.",
          data: findEmail,
        });
      }
    }

    await this.handleUpdate(id, data);

    res.json({
      error_code: 200,
      error_message: "",
      message: "Update success",
    });
  }
}

module.exports = UserService;
