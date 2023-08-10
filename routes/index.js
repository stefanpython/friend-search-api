var express = require("express");
var router = express.Router();
const user_controller = require("../controllers/userController");

/* GET/Display home page with all posts. */
router.get("/", user_controller.post_list);

// Create post
router.post("/create", user_controller.create_post);

// GET/Display single user post
router.get("/user/:userId", user_controller.single_post);

module.exports = router;
