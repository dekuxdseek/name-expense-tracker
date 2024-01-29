const jwt = require('jsonwebtoken');

const {User} = require('../../db/index');

const jwtsecretkey = 'jwtsecretkeytemp';

const login = async(req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let findUserInDB = await User.findOne({username : username, password : password});

    if(!findUserInDB) return res.status(403).json({
        msg : "given user doesn't exist"
    });

    let token = jwt.sign({username : username, password : password}, jwtsecretkey);


    res.status(200).json({
        msg : "Safely logged in",
        token : token
    });
};

module.exports = login