const router = require("express").Router();
const signupRoutes = require("./signup");
const loginRoutes = require("./login");
const mapRoutes = require("./map");

router.use("/signup", signupRoutes)
router.use("/login", loginRoutes)
router.use("/map", mapRoutes);

module.exports = router;
