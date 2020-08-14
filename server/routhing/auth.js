const {Router} = require("express")
const router = Router();

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const User = require("../model/user");

router.post("/register", async (req, res) => {
    try {
        const {login, password} = req.body;


        const passHash = await bcrypt.hash(password, 10)


        const user =  new User({login, password: passHash});

        const token = jwt.sign({password}, process.env.jwtPrivateKey)
        await user.save();
        res.json({token})
    } catch (e) {
        res.status(500).json({msg: "server error"})
    }
})

router.post("/login", async (req, res) => {
    try {
        const {login, password} = req.body;

        const user = await User.findOne({login});

        if (!user) {
            return res.status(401).json({msg: "User not found"})
        }

        const isMatch = bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({msg: "Login or password mistake"})
        }

        const token = jwt.sign({password}, process.env.jwtPrivateKey)

        res.json({token})

    } catch (e) {
        res.status(500).json({msg: "server error"})
    }
})

module.exports = router;