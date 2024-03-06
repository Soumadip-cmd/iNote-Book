//import every npm here

const express = require("express");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const path = require("path");
const { body, validationResult } = require("express-validator");
const User = require("../models/Users");
const { resourceLimits } = require("worker_threads");
const fetchuser = require("../middleware/fetchuser");
//Routin with express
const router = express.Router();
//use to access(req.body)-----mainly body request
router.use(express.json());

const JWT_SECRET = "soumadip@$#youknow/`/*";

//localhost:${port}/login--->
//user validation method
router.post(
  "/create",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("name").isLength({ min: 3 }),
  ],
  async (req, res) => {
    // error finding in user login
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    }
    //try cathch under user authetication
    try {
      //salting & hashing password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })
        // .then(user => res.json(user))
        .catch((err) => {
          console.log(err);
          res.json({ error: "Enter a unique valid email." });
        });

      const data = {
        id: User.id,
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

router.post(
  "/login",
  [
    body("email", "Write a Valid email").isEmail(),
    // password must be at least 5 chars long
    body("password", "password must be at least 5 chars long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    //body("email")&  body("password") must be same with req.body
    //and body("email")&  body("password") is also must be same with user.create ->object type (password & email) name wise and also vary with body("email").isEmail(), body("password").isLength({ min: 5 }), body("name").isLength({ min: 3 }),of    '/create' page
    try {
      let user = await User.findOne({ email });
      // console.log(user);
      if (!user) {
        res.status(400).json({ error: "Login Failed." });
      }
      let pass = await bcrypt.compare(password, user.password);

      if (!pass) {
        res.status(404).json({ error: "Login Failed." });
      }
      const data = {
        user: {
          id: user.id,
        },
      };

      const token = jwt.sign(data, JWT_SECRET);
      res.json({ Tag_Number: token });
    } catch (error) {
      console.error(error.message);
      res.status(505).send("Some error occured");
    }
  }
);

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    let userID = req.user.id;
    //here .user is login const data-->user
    // const data = {
    //   user: {
    //     id: user.id,
    //   },
    // };
    //and here user & user.id variable name must be same
    const user = await User.findById(userID).select("-password");
    // console.log(userID);
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(505).send("Some error occured");
  }
});
module.exports = router;
