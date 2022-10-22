const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ user }, process.env.SECURE_TOKEN);
}

module.exports = generateToken;