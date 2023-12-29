const mongoose = require("mongoose");
const db = require("../config/db");

const { schema } = mongoose;

const cronJobSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  title: {
    middleName: String,
  },
  lastName: {
    type: String,
  },
  currentDate: {
    type: Date,
  },
});
const CronJob = db.model("cronjob", cronJobSchema);
module.exports = CronJob;
