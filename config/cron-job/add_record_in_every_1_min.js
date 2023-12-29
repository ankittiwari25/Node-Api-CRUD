
// const CronJobService = require("/Users/chintanpandya/Ankit/php_practice/node js project with flutter app/services/cron.service.js");
const cron = require("node-cron");


cron.schedule("* * * * *", async () => {
    try {
    // const firstName = "Ankit";
    // const middleName = "Vijaynath";
    // const lastName = "Tiwari";
    // const currentDate = new Date();

    // let cronJob = await CronJobService.createCronJobData({
    //   firstName,
    //   middleName,
    //   lastName,
    //   currentDate,
    // });
    console.log("cron job data added successfully => " +cronJob);
  } catch (error) {
    console.log("error is =>" + typeof error); 
    res.status(401).json({ status: false, message: error, data: {} });
  }
});
