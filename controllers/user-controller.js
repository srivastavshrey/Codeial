const User = require("../models/user");
module.exports.profile = function (req, res) {
  return res.render("profile");
};
//render the sign up page
module.exports.signUp = function (req, res) {
  return res.render("user_signup", { title: "Codeial|Sign-Up" });
};
//signing up
module.exports.createUser = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding user in signing up");
      return;
    }
    if (!user) {
      User.create(
        req.body,

        function (err, newUser) {
          if (err) {
            console.log(`Can't sign up`);
            return;
          }
          return res.redirect("/user/sign-in");
        }
      );
    } else {
      res.redirect("back");
    }
  });
};
//render tht sign in page
module.exports.signIn = function (req, res) {
  return res.render("user_signin", { title: "Codeial|Sign_In" });
};
module.exports.createSession = function (req, res) {};
