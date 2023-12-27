const express = require('express');
const app=express();
const bodyParser=require('body-parser');
const userRoute=require('./routes/user.route')
const todoRoute=require('./routes/todo.routes')

app.use(bodyParser.json());

app.use('/',userRoute);
app.use('/',todoRoute);

module.exports=app;