const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
router.get('/', (req, res) => {
    res.send('This is from router');
})
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    const checkExist = await User.findOne({ email: email });
    try {
        if (checkExist) {
            return res.status(422).json({ success: false, message: "User Already Exist" });
        }
        const user = await User.create(req.body);
        return res.status(201).json({ success: true, message: user });
    } catch (error) {
        return res.status(500).json({ success: false, message: error });
    }
});

module.exports = router;