const express = require('express');
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
        const { email, password } = req.body;
        if (email.length == 0 || password.length == 0) {
            return res.status(400).json({ success: false, message: "please enter your email or password" })
        }
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            if (userExist.password == password) {
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