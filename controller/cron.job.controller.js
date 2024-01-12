const CronJobService = require("../services/cron.service");

exports.createCronJobData = async () => {
  try {
    const firstName = "Ankit";
    const middleName = "Vijaynath";
    const lastName = "Tiwari";
    const currentDate = new Date();

    let cronJob = CronJobService.createCronJobData({
      firstName,
      middleName,
      lastName,
      currentDate,
    });
    console.log("cron job data added successfully => ");
  } catch (error) {
    console.log("error is =>" , typeof error); 
    res.status(401).json({ status: false, message: error, data: {} });
  }
};
