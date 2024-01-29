const {Transaction} = require('../../db/index');


const updateTransaction = async(req, res)=>{

    let id = req.params.id;

    let findTransaction = await Transaction.findById(id);

    if(req.body.title) findTransaction.title = req.body.title
    if(req.body.description) findTransaction.description = req.body.description
    if(req.body.transactionType) findTransaction.transactionType = req.body.transactionType
    if(req.body.amount) findTransaction.amount = req.body.amount

    await findTransaction.save();
    
    res.status(200).json({
        msg : "Transaction updated"

    })
};

module.exports = updateTransaction;