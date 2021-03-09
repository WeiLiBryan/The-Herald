const router = require("express").Router();
const signupRoutes = require("./signup");
const loginRoutes = require("./login");
const updateRoutes = require ("./update");
const authRoutes = require ("./auth");

router.use("/signup", signupRoutes)
router.use("/login", loginRoutes)
router.use("/update", updateRoutes)
router.use("/checkAuthentication", authRoutes)


module.exports = router;
