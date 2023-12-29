
const routerTodo= require("express").Router();
const TodoController = require("../controller/todo.controller");

routerTodo.post("/createTodo", TodoController.createTodo);
routerTodo.post("/getTodo",TodoController.getTodo)
routerTodo.post("/updateTodo",TodoController.updateTodo)
routerTodo.post("/deleteTodo",TodoController.deleteTodo)
routerTodo.post("/searchTodo", TodoController.searchTodo)
routerTodo.get('/terms-condition',TodoController.termsAndCondition)

module.exports = routerTodo;
