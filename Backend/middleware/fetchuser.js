const jwt = require("jsonwebtoken");
// const User=require('../models/User')
const JWT_SECRET = "soumadip@$#youknow/`/*";

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).json({ error: "Login Failed.." });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    // console.log(data)
    // console.log(req.user)
    next();
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
};
module.exports = fetchuser;
