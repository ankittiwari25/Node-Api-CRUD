const UserModel = require("../model/user_model");
const UserService = require("../services/user.services");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    UserModel.findOne({ email: req.body.email }).then(async (user) => {
      if (user) {
        res
          .status(422)
          .json({ status: false, success: "User already exists!" });
      } else {
        const { email, password } = req.body;
        console.log("req email is " + req.body.email);
        const successRes = await UserService.registerUser({ email, password });
        const token = jwt.sign({ userId: successRes._id }, "Ankit1234");
        res.json({
          status: true,
          success: "User Register Successfully",
          data: successRes,
          token: token,
        });
      }
    });
  } catch (err) {
    res.json({ status: false, success: "Something went wrong!" });
    throw err;
  }
};

exports.login = async (req, res) => {
  if (req.headers.authorization == null) {
    res.status(404).json({
      status: false,
      success: "Please pass token in header section",
    });
  }
  //   const headerToken = req.headers.authorization.split(" ")[1];
  //   const decodedToken = jwt.verify(headerToken, "Ankit1234");
  try {
    if (
      ((req.body.email == "" || req.body.email == null) &&
        req.body.password == "") ||
      req.body.password == null
    ) {
      res.status(404).json({
        status: false,
        success: "Please enter email and password both",
      });
    } else if (req.body.email == "" || req.body.email == null) {
      res.status(404).json({ status: false, success: "Please enter email" });
    } else if (req.body.password == "" || req.body.password == null) {
      res.status(404).json({ status: false, success: "Please enter password" });
    } else {
      UserModel.findOne({ email: req.body.email }).then(async (user) => {
        if (user) {
          const isMatchPass = await bcrypt.compare(
            req.body.password,
            user.password
          );
          if (isMatchPass) {
            const token = jwt.sign({ userId: user._id }, "Ankit1234");
            res.status(200).json({
              status: true,
              success: "User login successfully!",
              data: user,
              token: token,
              simpleArray:[{name:'Ankit',surname:"Tiwari"},{name:"Ashutosh",surname:"Pandey"}]
            });
          } else {
            res.status(401).json({
              status: false,
              success: "Email or password doesn't match",
            });
          }
        } else {
          res.status(404).json({ status: false, success: "User not found" });
        }
      });
    }
  } catch (err) {
    res.json({ status: false, success: "Something went wrong!" });
  }
};
