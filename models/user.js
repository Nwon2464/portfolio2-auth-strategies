const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    body: { type: String, unique: false },
    footer: { type: String, unique: false },
    googleId: { type: String, unique: false },
    familyName: { type: String, unique: false },
    givenName: { type: String, unique: false },
    locale: { type: String, unique: false },
    provider: { type: String, unique: false },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", userSchema);

module.exports = Users;
