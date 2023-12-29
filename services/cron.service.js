
const CronJobModel = require("../model/cron_job_model");

class CronJobService {
  static async createCronJobData(firstName, middleName, lastName,currentDate) {
    try {
      const cronJobData = CronJobModel(
        firstName,
        middleName,
        lastName,
        currentDate
      );
      return await cronJobData.save();
    } catch (err) {
      throw err.me;
    }
  }
}
module.exports = CronJobService;