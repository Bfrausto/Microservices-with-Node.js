const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../utils/error');

const secret = config.jwt.secret;

function sign(data) {
    return jwt.sign(data, secret);
}

function verify(token) {
    return jwt.verify(token, secret);
}

const check = {
    own: function (req, owner) {
        const decoded = decodeHeader(req);
        console.log(decoded);
        console.log(owner);


        if (decoded.id !== owner) {
            throw error('Not allowed', 401);
        }
    },
    logged: function (req) {
        const decoded = decodeHeader(req);
    },
}
function getToken(auth) {
    if (!auth) {
         throw error('No token provided', 400);
    }

    if (auth.indexOf('Bearer ') === -1) {
         throw error('Invalid format', 400);
    }

    let token = auth.replace('Bearer ', '');
    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check
}