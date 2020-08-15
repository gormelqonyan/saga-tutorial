const { Router } = require("express");
const router = Router();
const User = require("../model/user");
const autication = require("../middlware/user");

router.get("/user/me", autication, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.userId });

    res.json({ user });
  } catch (e) {}
});

module.exports = router;
