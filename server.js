// dependencies
const mongoose = require('./connection');

const express = require('express')
const path = require('path');
require('dotenv').config();
const index = require('./routes');
const verifySub = require('./routes/verify-sub.js')

const app = express();
app.set('view engine', 'ejs');

// static middleware
app.use(express.static(path.join(__dirname, 'public')))

// routes middleware
app.use('/', index)
app.use('/verify-sub', verifySub)


//port set via .env file or default 3000
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));