const jwt = require('jsonwebtoken');

const {User, Transaction} = require('../../db/index');


const getTransaction = async(req, res)=>{

    let bearerToken = req.headers["authorization"];
    let token = bearerToken.slice(7);

    let userData = jwt.decode(token);

    let findUser = await User.findOne({username : userData.username, password : userData.password}).populate('transactions');

    let transactions = findUser.transactions;

    res.json({
        transactions : transactions
    });
};

module.exports = getTransaction;