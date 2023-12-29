const TodoServices = require("../services/todo.service");
const UserModel = require("../model/user_model");
const jwt = require("jsonwebtoken");
const TodoModel = require("../model/todo.model");

exports.createTodo = async (req, res) => {
  try {
    if (req.headers.authorization == null) {
      res.status(401).json({
        status: false,
        message:
          "Access is denied due to invalid credentials. Please provide a valid authentication token in the request header",
        data: {},
      });
    }
    const tokenFromHeader = req.headers.authorization.split(" ")[1];
    const userIdFromJWT = jwt.verify(tokenFromHeader, "Ankit1234");
    const userId = userIdFromJWT.userId;
    const description = req.body.description;
    const title = req.body.title;
    const currentDate = new Date();

    let todo = TodoServices.createTodo({
      userId,
      title,
      description,
      currentDate,
    });

    res
      .status(200)
      .json({ status: true, message: "Data added successfully", data: todo });
  } catch (error) {
    console.log("error is =>" + typeof error);
    res.status(401).json({ status: false, message: error, data: {} });
  }
};

exports.getTodo = async (req, res) => {
  try {
    if (req.headers.authorization == null) {
      res.status(401).json({
        status: false,
        message:
          "Access is denied due to invalid credentials. Please provide a valid authentication token in the request header",
        data: {},
      });
    }
    const tokenFromHeader = req.headers.authorization.split(" ")[1];
    const userIdFromJWT = jwt.verify(tokenFromHeader, "Ankit1234");
    let todoArray = await TodoServices.getTodoData(userIdFromJWT.userId);
    try {
      console.log(todoArray);
      res.status(200).json({
        status: true,
        message: "Data find successfully",
        data: todoArray,
      });
    } catch (error) {
      res.status(404).json({ status: false, message: error, data: {} });
    }
  } catch (error) {
    console.log("error is =>" + typeof error);
    res.status(401).json({ status: false, message: error, data: {} });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    if (req.headers.authorization == null) {
      res.status(401).json({
        status: false,
        message:
          "Access is denied due to invalid credentials. Please provide a valid authentication token in the request header",
        data: {},
      });
    }
    const tokenFromHeader = req.headers.authorization.split(" ")[1];
    const userIdFromJWT = jwt.verify(tokenFromHeader, "Ankit1234");
    const todoIdFromReq = req.body.todoId;
    const todoDataFromReq = req.body.updatedData;

    const isTodoAvailable = await TodoServices.checkTodoAvailable(
      userIdFromJWT,
      todoIdFromReq
    );

    if (!isTodoAvailable) {
      res.status(200).json({
        status: false,
        message: "To do not found",
        data: {},
      });
    }
    try {
      const updatedData = await TodoServices.updateTodo(
        todoIdFromReq,
        todoDataFromReq
      );
      res.status(200).json({
        status: true,
        message: "Todo updated successfully",
        data: {},
      });
    } catch (error) {
      res.status(404).json({ status: false, message: error.me, data: {} });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error.me, data: {} });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    if (req.headers.authorization == null) {
      res.status(401).json({
        status: false,
        message:
          "Access is denied due to invalid credentials. Please provide a valid authentication token in the request header",
        data: {},
      });
    }
    const tokenFromHeader = req.headers.authorization.split(" ")[1];
    const userIdFromJWT = jwt.verify(tokenFromHeader, "Ankit1234");
    console.log("userIdFromJWT => " + userIdFromJWT.userId);
    const todoIdFromReq = req.body.todoId;
    const isTodoAvailable = await TodoServices.checkTodoAvailable(
      userIdFromJWT.userId,
      todoIdFromReq
    );
    if (!isTodoAvailable) {
      res.status(200).json({
        status: false,
        message: "To do not found",
        data: {},
      });
    }
    const deleteRecord = await TodoServices.deleteTodo(todoIdFromReq);
    res.status(200).json({
      status: true,
      message: "Todo deleted successfully",
      data: deleteRecord,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error, data: {} });
  }
};

exports.searchTodo = async (req, res) => {
  if (req.headers.authorization == null) {
    res.status(401).json({
      status: false,
      message:
        "Access is denied due to invalid credentials. Please provide a valid authentication token in the request header",
      data: {},
    });
  }
  const searchFromClientSide = req.body.searchText;
  const cursor = await TodoServices.searchTodo(searchFromClientSide);
  res.status(200).json({
    status: true,
    message: "Todo fetched successfully",
    data: cursor,
  });
};
