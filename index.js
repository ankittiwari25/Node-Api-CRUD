const app=require('./app');

const db=require('./config/db');
const socket=require
const userModel=require('./model/user_model');
const TodoModel=require('./model/todo.model');
 
const port=3000;

app.get('/',(req,res)=>{
    res.send("This is simple route");
});

app.listen(port,()=>{
    console.log('Server is running on the port http://localhost:'+port);
});
