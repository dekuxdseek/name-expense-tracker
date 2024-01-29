const router = require('express');

const {authentication} = require('./Authentication/auth');
const {transactions} = require('./Transaction/transaction');

const Router = router.Router();

Router.use('/auth', authentication);

Router.use('/transactions', transactions);

module.exports = {
    allRoutes : Router
}