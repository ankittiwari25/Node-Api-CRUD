const app = require("./app");
const db = require("./config/db");
const socket = require;
const userModel = require("./model/user_model");
const TodoModel = require("./model/todo.model");
const CronJobModel = require("./model/cron_job_model");
const createCronJob = require("./config/cron-job/add_record_in_every_1_min");
const TodoController = require("./controller/todo.controller");
const port = 3000;
var QRCode = require("qrcode");
var fs = require("fs");

app.get("/", (req, res) => {
  fs.readFile("qrCode.png", (err, data) => {
    const imageData = data;
   var img = Buffer.from(imageData, "base64");

   res.writeHead(200, {
     "Content-Type": "image/png",
     "Content-Length": img.length,
   });
   res.end(img); 

  });
});

app.get("/terms-condition", TodoController.termsAndCondition);

app.listen(port, () => {
  console.log("Server is running on the port http://localhost:" + port);
});

// QRCode.toDataURL("I am a pony!", function (err, url) {
//   console.log(url);
//   // Your code to handle binary data
//   fs.writeFile(
//     "qrCode.png",
//     url.replace(/^data:image\/png;base64,/, ""),
//     "base64",
//     (error) => {
//       if (error) {
//         throw error;
//       } else {
//         console.log("binary saved!");
//       }
//     }
//   );
// });

// QRCode.toString("I am a pony!", { type: "terminal" }, function (err, url) {
//   console.log(url);
// });
