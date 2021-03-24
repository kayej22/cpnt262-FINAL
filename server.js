// dependencies
const mongoose = require('./connection');

const express = ('express');
const path = require('path');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');

// static middleware
app.use(express.static(path.join(__dirname, 'public')))

// routes/index.js middleware
app.use('/', index)