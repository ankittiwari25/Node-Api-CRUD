const mongoose = require("mongoose");
const db = require("../config/db");

const { schema } = mongoose;

const todoSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  currentDate: {
    type: Date
  }
});
const TodoModel = db.model("todo", todoSchema);
module.exports = TodoModel;
