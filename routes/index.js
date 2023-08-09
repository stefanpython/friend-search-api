var express = require("express");
var router = express.Router();
const user_controller = require("../controllers/userController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Create post
router.post("/create", user_controller.create_post);

module.exports = router;
