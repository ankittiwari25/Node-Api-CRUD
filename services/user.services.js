const UserModel = require("../model/user_model");


class UserService {
  static async registerUser(email, password) {
    try {
      const createUser = UserModel(email, password);
      return await createUser.save();
    } catch (err) {
      throw err.me;
    }
  }
}

module.exports = UserService;
