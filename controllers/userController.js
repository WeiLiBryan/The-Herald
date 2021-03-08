const db = require("../models");
const passport = require("passport");

module.exports = {
  create: function (req, res) {
    console.log("create user =======>");
    db.User.findOne({ username: req.body.username }, async function (err, doc) {
      if (err) throw err;
      if (doc) res.send("User already exits");
      if (!doc) {
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new db.User({
          username: req.body.username,
          password: req.body.password,
        });
        await newUser.save();
        console.log("newUser =====>", newUser);
        res.json();
      }
    });
  }
  
  // create: function (req, res) {
  //     db.User.create(req.body).then( function (user) {
  //         console.log(user);
  //         res.send(user)
  //     })
  // }
};
