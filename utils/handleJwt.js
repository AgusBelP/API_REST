const jwt = require('jsonwebtoken');
require('dotenv').config();
secret = process.env.SECRET;

const tokenSign = async (user) => {
    const token = await jwt.sign({
        _id : user._id,
        role: user.role
    },
    secret,
    {expiresIn:"15min"});
    
    return token
};

const verifyToken = async(tokenJWT) => {
    try {
        return jwt.verify(tokenJWT, secret)
    } catch (error) {
        return null
    }
};

module.exports = {
    tokenSign,
    verifyToken
}