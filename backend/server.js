const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log(`http://localhost:${process.env.PORT}`);
})

