const User = require("../models/user");
const { body } = require("express-validator");
const multer = require("multer");

// Set up multer storage and filename for uploading images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.create_post = [
  // Handle single file upload with filed name "image"
  (req, res, next) => {
    const uploadMiddleware = upload.single("image");
    uploadMiddleware(req, res, (err) => {
      if (err) {
        console.error("Error uploading file:", err);
        return res.status(400).json({ error: err.message });
      }
      console.log("File uploaded successfully");
      next();
    });
  },

  // Sanitize and validate inputs
  body("firstName").trim().escape(),
  body("lastName").trim().escape(),
  body("image").trim().notEmpty().withMessage("Image input must not be empty"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description must not be empty"),

  async (req, res, next) => {
    const { firstName, lastName, description } = req.body;

    try {
      // Add Post with user details
      const newUser = new User({
        firstName,
        lastName,
        description,
        image: req.file ? req.file.filename : null,
      });

      // Save new post with user details to database
      const savedUser = await newUser.save();

      res
        .status(201)
        .json({ message: "Post created successfully!", savedUser });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
];

// TODO: GRAB ALL USERS DATA + CREATE ROUTE
