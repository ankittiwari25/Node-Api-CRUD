const mongoose = require("mongoose");

const connection = mongoose
  .createConnection("mongodb+srv://ankit:ankit%401995@cluster0.vloyk0e.mongodb.net/todo_app")
  .on("open", () => {
    console.log("Mongo database connected");
  })
  .on("error", () => {
    console.log("Mongo database error");
  });

module.exports = connection;
