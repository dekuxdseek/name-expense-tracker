const jwt = require('jsonwebtoken');

const {User, Transaction} = require('../../db/index');


const addTransaction = async(req, res)=>{

    // adding transaction
    let newTransaction = new Transaction({
        title : req.body.title,
        description : req.body.description,
        transactionType : req.body.transactionType,
        amount : req.body.amount
    });

    await newTransaction.save();

    let token = req.headers["authorization"];
    token = token.slice(7);

    let userData = jwt.decode(token);

    let findUser = await User.findOne({username : userData.username, password : userData.password});

    findUser.transactions.push(newTransaction._id);
    findUser.save();
    
    res.status(200).json({
        msg : "Transaction added",
        id : newTransaction._id
    })
};

module.exports = addTransaction;