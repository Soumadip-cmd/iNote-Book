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
    let success=false//here declare success not inside try!!!

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ Success:success,errors: errors.array() });
    }
    try {
      //try cathch under user authetication
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
          res.json({ Success:success,error: "Enter a unique valid email." });
        });

      const data = {
        id: User.id,
      };
      success=true
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ Success:success,token:authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({Success:success,error:"Some error occured"});
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
    let success = true
    
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        success = false
        return res.status(400).json({ Success: success, errors: errors.array() });
      }
      const { email, password } = req.body;
      //body("email")&  body("password") must be same with req.body
      //and body("email")&  body("password") is also must be same with user.create ->object type (password & email) name wise and also vary with body("email").isEmail(), body("password").isLength({ min: 5 }), body("name").isLength({ min: 3 }),of    '/create' page
      let user = await User.findOne({ email });
      // console.log(user);
      if (!user) {
        success = false
        res.status(400).json({ Success: success, error: "Login Failed." });
      }
      let pass = await bcrypt.compare(password, user.password);

      if (!pass) {
        success = false
        res.status(404).json({ Success: success, error: "Login Failed." });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      success = true
      const token = jwt.sign(data, JWT_SECRET);
      res.json({ Success: success, Tag_Number: token });//must do this json as you can take object type in fetching login ---->(json.Success) or (json.Tag_Number)
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
