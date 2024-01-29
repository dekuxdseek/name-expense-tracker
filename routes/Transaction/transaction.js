const router = require('express');

const {addTransaction, updateTransaction, deleteTransaction} = require('../../controllers/Transaction/transaction');

const Router = router.Router();

Router.post('/', addTransaction);

Router.put('/:id', updateTransaction);

Router.delete('/:id', deleteTransaction);

module.exports = {
    transactions : Router
}