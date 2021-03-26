const express = require('express')
const router = express.Router()
const api = require('./api/v0')
const config = require('../config')

// global ejs variabls
router.use((req, res, next) => {
  res.locals = config
  next()
})

// Home
router.get('/', (req, res) => {
  res.render('pages/index', {pageTitle: 'Home'})
})

// Subscribe
router.get('/subscribe', (req, res) => {
  res.render('pages/subscribe', {pageTitle: 'Subscribe'})
})

// Team
router.get('/team', (req, res) => {
  res.render('pages/member', {pageTitle: 'Team'})
})

// Admin
router.get('/admin', (req, res) => {
  res.render('pages/admin', {pageTitle: 'Admin'})
})

router.use('/api/v0/', api);

module.exports = router

