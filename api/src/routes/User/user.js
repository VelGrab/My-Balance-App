const express = require("express");
const router = express.Router();
const { User } = require("../../../db.js");
const bcrypt = require("bcrypt");

/* The above code is creating a new user. */
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const newUser = await User.create({ email, password });
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
