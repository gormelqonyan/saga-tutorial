const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/user");

const { validationResult, check } = require("express-validator");

router.post(
  "/register",
  [
    check("username").notEmpty().withMessage("User name required field"),
    check("email")
      .isEmail()
      .withMessage("must be a Email")
      .notEmpty()
      .withMessage("Email required field"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("must be a minimum 6 symbol")
      .notEmpty()
      .withMessage("Password required field"),
  ],
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length) {
        return res.status(401).json({ errors: errors.array() });
      }

      const { username, email, password } = req.body;

      const emailIsAlready = await User.findOne({ email });

      if (emailIsAlready) {
        return res.status(401).json({ msg: "Email is already exist" });
      }

      const passHash = await bcrypt.hash(password, 10);

      const user = new User({ username, email, password: passHash });

      await user.save();
      console.log("user.id", user.id);
      const token = jwt.sign({ userId: user.id }, process.env.jwtPrivateKey);

      res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(500).json({ msg: "server error" });
    }
  }
);

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .withMessage("must be a Email")
      .notEmpty()
      .withMessage("must be a not empty"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("must be a minimum 6 symbol")
      .notEmpty()
      .withMessage("must be a not empty"),
  ],
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length) {
        return res.status(401).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ msg: "User not found" });
      }

      const isMatch = bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ msg: "Login or password mistake" });
      }

      const token = jwt.sign({ userId: user.id }, process.env.jwtPrivateKey);

      res.json({ token });
    } catch (e) {
      res.status(500).json({ msg: "server error" });
    }
  }
);

module.exports = router;
