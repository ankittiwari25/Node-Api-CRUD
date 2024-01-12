const TodoModel = require("../model/todo.model");

class TodoServices {
  /// add TODO from the database
  static async createTodo(userId, title, description) {
    try {
      const createTodoData = TodoModel(userId, title, description);
      return await createTodoData.save();
    } catch (err) {
      throw err.me;
    }
  }
  /// get TODO from the database
  static async getTodoData(userIdDB, page, limit) {
    console.log("getTodoData call");
    try {
      /// this is pagination query
      /// .skip((page-1)*limit).limit(limit) remove this line for getting all data in same time
      let data = await TodoModel.find({ userId: userIdDB }).skip((page - 1) * limit).limit(limit);
      return data;
    } catch (error) {
      throw error.me;
    }
  }
  /// update TODO from the database
  static async updateTodo(todoId, updatedData) {
    try {
      let data = await TodoModel.updateOne(
        { _id: todoId },
        { $set: updatedData }
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
  /// delete TODO from the database
  static async deleteTodo(todoId) {
    try {
      const query = { _id: todoId };
      let data = await TodoModel.deleteOne(query);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async checkTodoAvailable(userId, todoId) {
    try {
      console.log("userId => " + userId);
      console.log("todoId => " + todoId);

      const query = {
        userId: userId,
        _id: todoId,
      };

      let data = await TodoModel.find(query);
      return data;
    } catch (error) {}
  }

  static async searchTodo(searchText) {
    try {
      const regex = new RegExp(searchText, "i");
      let cursor = await TodoModel.find({
        title: { $regex: regex },
      });
      return cursor;
    } catch (error) {}
  }
}

module.exports = TodoServices;
