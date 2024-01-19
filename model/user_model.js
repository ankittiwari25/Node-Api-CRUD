const mongoose = require("mongoose");
const db = require("../config/db");
const bcrypt = require("bcrypt");


const { schema } = mongoose;

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  resetLink:{
    data: String,
  }
},{timestamps: true});
userSchema.pre("save", async function () {
  try {
    var user = this;
    user.password = await bcrypt.hash(user.password, 8);
  } catch (err) {}
});
const UserModel = db.model("user", userSchema);
module.exports = UserModel;
