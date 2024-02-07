const _ = require("lodash");
module.exports = {

  signup: async (req, res) => {
    try {
      return res.view("users/signup",{message: "failed"});
    } catch (err) {
      console.log(err);
      return res.json({ status: "404", message: "failed", data: err.message });
    }
  },
  login: async (req, res) => {
    try {
      return res.view("users/login",{message: "failed"});
    } catch (err) {
      console.log(err);
      return res.json({ status: "404", message: "failed", data: err.message });
    }
  },
};