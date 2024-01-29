const {User} = require('../../db/index');

const signup = async (req, res) =>{
    let username = req.body.username;
    let password = req.body.password;

    let findUserInDB = await User.findOne({username : username});

    if(findUserInDB) return res.status(403).json({
        msg : "given user already exists"
    });

    let newUser = new User( {
        username : username,
        password : password
    });

    await newUser.save();
    res.send(newUser._id);

};

module.exports = signup 