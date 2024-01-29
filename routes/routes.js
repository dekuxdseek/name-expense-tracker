const router = require('express');

const {authentication} = require('./routes/Authentication/auth');
const {transactions} = require('./routes/Transaction/transaction');

const Router = router.Router();

Router.use('/auth', authentication);

Router.use('/transactions', transactions);

module.exports = {
    allRoutes : Router
}