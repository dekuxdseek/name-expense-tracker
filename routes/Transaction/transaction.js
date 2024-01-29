const router = require('express');

const {addTransaction, updateTransaction, deleteTransaction, getTransaction} = require('../../controllers/Transaction/transaction');

const Router = router.Router();

Router.get('/', getTransaction);

Router.post('/', addTransaction);

Router.put('/:id', updateTransaction);

Router.delete('/:id', deleteTransaction);


module.exports = {
    transactions : Router
}