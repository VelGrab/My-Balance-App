const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ user }, process.env.SECURE_TOKEN, { expiresIn: '7d' });
}

module.exports = generateToken;