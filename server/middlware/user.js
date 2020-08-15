const jwt = require("jsonwebtoken");

const autication = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  const { userId } = jwt.verify(token, process.env.jwtPrivateKey);
  if (userId) {
    req.userId = userId;
    next();
  } else {
    res.status(401).json({ msg: "User not found" });
  }
};

module.exports = autication;
