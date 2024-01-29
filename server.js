const express = require('express');

const { allRoutes } = require('./routes/routes');

const port = 3000 || process.env.PORT;

const app = express();

app.use(express.json());

app.use(allRoutes);


// app.get('/', (req, res) =>{
//     res.send('all transactions in format {date: [transactions]}');
// });

// app.get('/:time', (req, res) =>{
//     res.send('all transactions for t');
// });


app.listen(port);