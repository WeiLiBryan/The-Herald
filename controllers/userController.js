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
  },

  update: function (req, res) {
    console.log("update topic =====>");
    console.log("Object.keys(req.body)", Object.keys(req.body)[0]);
    console.log("req.user", req.user);
    db.User.findOneAndUpdate(
      { username: req.user.username },
      { $push: { topic: Object.keys(req.body)[0] } }
    )
      .then(function (data) {
        console.log("updated", data);
        // db.User.save();
        // console.log("db.User", db.User);
        res.json();
      })
      .catch((err) => res.status(422).json(err));
  }

};
