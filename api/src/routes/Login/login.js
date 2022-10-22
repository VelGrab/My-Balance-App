const express = require("express");
const router = express.Router();
const generateToken = require("../../utils/generateToken")
const bcrypt = require("bcrypt");
const { User } = require("../../../db.js");

/* This is a post request to login users. */
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).send({ message: "Invalid Credentials" });
      } else {
        res.status(200).json({
          _id: user.id,
          email: user.email,
          token: generateToken(user.id)
        });
      }
    } else {
      res.status(400).send({ message: "User does not exist" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;