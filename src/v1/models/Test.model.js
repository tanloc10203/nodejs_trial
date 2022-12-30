const mongoose = require("mongoose");

let TestSchema = new mongoose.Schema(
  {
    address: String,
    avatar: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Test", TestSchema);
