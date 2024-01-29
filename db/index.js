const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adminsid:xw05Ltqj0mIq3NKO@cluster001.wth6wk9.mongodb.net/');

const User = require('./user');
const Transaction = require('./transaction');

module.exports = {
    User : User,
    Transaction : Transaction
}