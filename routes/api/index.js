const router = require("express").Router();
const signupRoutes = require("./signup")
const loginRoutes = require("./login")

router.use("/signup", signupRoutes)
router.use("/login", loginRoutes)

module.exports = router;
