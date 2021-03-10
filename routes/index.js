const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get('/logout', function (req, res){
  console.log("logging out????")
  req.session.destroy(function (err) {
    res.redirect("/");
  });
});

if (process.env.NODE_ENV === "production") {
    // router.use(express.static(path.join(__dirname, 'client/build')));
    router.use( (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
  }

module.exports = router;