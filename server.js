const express = require('express');
const jwt = require('jsonwebtoken');

const {User, Transaction} = require('./middlewares/db/index');
const {signup, login } = require('./middlewares/routes/index');

const port = 3000 || process.env.PORT;
const jwtsecretkey = 'jwtsecretkeytemp';

const app = express();

app.use(express.json());


app.use('/login', login);

app.use('/signup', signup);



app.get('/', (req, res) =>{
    res.send('all transactions in format {date: [transactions]}');
});

app.get('/:date', (req, res) =>{
    res.send(':date all transactions');
});


app.post('/', async(req, res)=>{

    // username and password save logic
    // let username = req.body.username;
    // let password = req.body.password;
    // let newUser = new User( {
    //     username : username,
    //     password : password
    // })
    // await newUser.save();
    // res.send(newUser._id);

    // adding transaction
    // let newTransaction = new Transaction({
    //     title : req.body.title,
    //     description : req.body.description,
    //     transactionType : req.body.transactionType,
    //     amount : req.body.amount
    // });

    // await newTransaction.save();

    // res.send(newTransaction._id);
});

app.put('/:id', (req, res)=>{
    res.send('update give transaction ')
})


app.delete('/:id', (req, res)=>{
    res.send('delete transaction with id');
});


app.listen(port);