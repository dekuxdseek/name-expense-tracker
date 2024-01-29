const jwt = require('jsonwebtoken');

const {User, Transaction} = require('../../db/index');


const deleteTransaction =  async(req, res)=>{
    
    let token = req.headers["authorization"];
    token = token.slice(7);
    let userData = jwt.decode(token);

    let findUser = await User.findOne({username : userData.username, password : userData.password});

    let id = req.params.id;

    let ind = findUser.transactions.findIndex((transactionId) => id == transactionId);

    if(!(ind+1)) return res.status(400).json({
        msg : "Transaction doesn't exist",
        via : "Didn't find in User Transactions"
    });

    findUser.transactions.splice(ind, 1);
    findUser.save();

    let deleteResponse = await Transaction.findByIdAndDelete(id);

    res.status(400).json({
        msg : deleteResponse ? "Transaction deleted" : "Transaction doesn't exist",
        via : deleteResponse ? "Deleted Transaction" : "Didn't find in Transaction" 
    })
};

module.exports = deleteTransaction;