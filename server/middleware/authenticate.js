const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken; 
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        console.log(rootUser);
        if(!rootUser)
        {
            throw new Error("User Not Found");
        }
        console.log(rootUser);
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next() ;
    } catch (error) {
        res.status(401).send('Unauthorized : No Token Provided');
        console.log(error); 
    }
};
module.exports = Authenticate;