const jwt = require('jsonwebtoken');

const jwtsecretkey = 'jwtsecretkeytemp';

const authenticate = (req, res, next) => {
    let token = req.headers["authorization"];
    token = token.slice(7);

    try{
        jwt.verify(token, jwtsecretkey);
    }catch(err)
    {
        return res.status(403).json({msg : "Invalid User"});
    }
    next();
}


module.exports = authenticate;