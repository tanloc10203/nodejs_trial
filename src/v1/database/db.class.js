module.exports = class Db {
  constructor(db) {
    this.dbConnect = db;
  }

  handleFindAll(params = {}) {
    if (Object.keys(params).length === 0) return Promise.resolve(this.dbConnect.find());
    else {
      return new Promise(async (resolve, reject) => {
        try {
          const db = this.dbConnect;
          await db
            .find()
            .limit(params.limit)
            .skip(params.limit * (params.page - 1))
            .exec(function (err, response) {
              db.count().exec(function (err, count) {
                resolve({
                  response: response,
                  page: params.page,
                  total_rows: Math.ceil(count / params.limit),
                });
              });
            });
        } catch (error) {
          reject(error);
        }
      });
    }
  }

  handleFindById(id) {
    return Promise.resolve(this.dbConnect.findById(id));
  }

  handleCreate(data) {
    return Promise.resolve(this.dbConnect.create(data));
  }

  handleFindOne(query) {
    return Promise.resolve(this.dbConnect.findOne(query));
  }

  handleDeleteById(id) {
    return Promise.resolve(this.dbConnect.findByIdAndRemove(id));
  }

  handleUpdate(id, data) {
    return Promise.resolve(this.dbConnect.findByIdAndUpdate(id, data));
  }
};
