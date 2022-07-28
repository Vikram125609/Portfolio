const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/userSchema');
router.get('/', (req, res) => {
    res.send('This is from router');
})
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    const userExist = await User.findOne({ email: email });
    try {
        if (userExist) {
            return res.status(422).json({ success: false, message: "User Already Exist" });
        }
        else if (password != cpassword) {
            return res.status(400).json({ success: false, message: "Password are not matching" });
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });
            await user.save()
            return res.status(201).json({ success: true, message: user });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error });
    }
});
router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "please enter your email or password" })
        }
        const userExist = await User.findOne({ email: email });
        console.log(userExist);
        if (userExist) {
            const isSame = await bcrypt.compare(password, userExist.password);
            if (isSame) {
                token = await userExist.generateAuthToken();
                console.log(token);
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
                return res.status(200).json({ success: true, message: userExist });
            }
            else {
                return res.status(404).json({ success: false, message: "Invalid Credentials" });
            }
        }
        else {
            return res.status(404).json({ success: false, message: "Invalid Credentials" });
        }
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error });
    }
});
module.exports = router;
