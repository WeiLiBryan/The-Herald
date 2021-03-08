// var passport = require("passport");
// var LocalStrategy = require("passport-local").Strategy;

// var db = require("../models");

// passport.use(
//   new LocalStrategy(
//   function(username, password, done) {
//     db.User.findOne({
//         username: username
//     }).then(function(dbUser) {
//       if (!dbUser) {
//         return done(null, false, {
//           message: "Incorrect username."
//         });
//       }
//       else if (!dbUser.validPassword(password)) {
//         return done(null, false, {
//           message: "Incorrect password."
//         });
//       }
//       return done(null, dbUser);
//     });
//   }
// ));

// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

// module.exports = passport;

var passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

  passport.use(
    new localStrategy((username, password, done) => {
      console.log("looking for use in localstrat")
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });

  module.exports = passport;