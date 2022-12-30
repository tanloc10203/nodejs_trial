const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, index: { unique: true, sparse: true } },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    address: String,
    avatar: String,
    token: String,
    phone_number: String,
    gender: String,
    delete: Boolean,
  },
  { timestamps: true }
);

module.exports.UserModel = mongoose.model("User", UserSchema);
