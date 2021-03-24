// dependencies
const mongoose = require('./connection');

const express = ('express');
const path = require('path');
require('dotenv').config();
const index = require('./routes');

const app = express();
app.set('view engine', 'ejs');

// static middleware
app.use(express.static(path.join(__dirname, 'public')))

// routes/index.js middleware
app.use('/', index)

//port set via .env file or default 3000
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));