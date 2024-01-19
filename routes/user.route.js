const router= require('express').Router();
const UserController = require('../controller/user.controller');
const SendPushNotification = require("../firasebase/firebase.config");

router.post('/registration',UserController.register);
router.post('/login', UserController.login);
router.post("/sendPushNotification", SendPushNotification.sendNotification);
router.put("/forgot_password", UserController.forgotPassword);

module.exports=router;