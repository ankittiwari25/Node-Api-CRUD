const express = require('express');
const app=express();
const bodyParser=require('body-parser');
const userRoute=require('./routes/user.route')
const todoRoute = require('./routes/todo.routes')
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

app.use(bodyParser.json());

app.use('/',userRoute);
app.use('/', todoRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports=app;