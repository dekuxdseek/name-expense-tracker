const router = require('express');

const {login, signup}  = require('../../controllers/Authentication/auth');

const Router = router.Router();

Router.post('/signup', signup);

Router.post('/login', login);

module.exports = {
    authentication : Router
}