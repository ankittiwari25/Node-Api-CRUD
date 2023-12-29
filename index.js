const app=require('./app');

const db=require('./config/db');
const socket=require
const userModel=require('./model/user_model');
const TodoModel = require('./model/todo.model');
const CronJobModel = require("./model/cron_job_model");
const createCronJob = require('./config/cron-job/add_record_in_every_1_min');
const port=3000;

app.get('/', (req, res) => {
    const htmlContent =
      "<html><body><h1>Terms and Conditions</h1><p>This is your terms and conditions content.</p></body></html>";
    res.send(htmlContent);
    // res.send("This is simple route");
});

app.listen(port,()=>{
    console.log('Server is running on the port http://localhost:'+port);
});
