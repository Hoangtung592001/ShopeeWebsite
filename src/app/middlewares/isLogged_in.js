const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const db = require('../models/Site');

module.exports = function(req, res, next) {
    const accessToken = req.cookies.token;

    if (!accessToken) {
        res.locals.access = false;
    }
    else {
        res.locals.access = true;
        
        jwt.verify(accessToken, "ANHYEUEM", function(err, user) {
            res.locals.name = user.name;
            req.user = user;
        })
    }
    next();
    
}
