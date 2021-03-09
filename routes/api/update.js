const router = require("express").Router();
const userController = require("../../controllers/userController");
const db = require("../../models");
const passport = require('passport')

router
  .route("/")
  .put(userController.update)
 
module.exports = router;