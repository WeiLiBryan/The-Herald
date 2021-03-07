const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./API");

router.use("/api", apiRoutes);

if (process.env.NODE_ENV === "production") {
    // router.use(express.static(path.join(__dirname, 'client/build')));
    router.use( (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
  }

module.exports = router;