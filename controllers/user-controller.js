const User = require("../models/user");
module.exports.profile = function (req, res) {
  return res.render("profile");
};
//render the sign up page
module.exports.signUp = function (req, res) {
  return res.render("user_signup", { title: "Codeial|Sign-Up" });
};
module.exports.createUser = function (req, res) {
  User.create(
    {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    },
    function (err, newUser) {
      if (err) {
        console.log(`Can't sign up`);
        return;
      }
      console.log("********", newUser);
      return res.redirect("back");
    }
  );
};
//render tht sign in page
module.exports.signIn = function (req, res) {
  return res.render("user_signin", { title: "Codeial|Sign_In" });
};
module.exports.createSession = function (req, res) {};
