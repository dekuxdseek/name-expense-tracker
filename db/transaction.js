const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
    title : {type : String, required : true},
    description : String,
    transactionType : {type : String, enum: ['credit', 'debit'], required : true},
    amount : {type: Number, required : true, min : 0},
    date: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;