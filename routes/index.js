const express = require('express')
const router = express.Router()
const api = require('./api/v0')

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
  res.render('pages/team', {pageTitle: 'Team'})
})

// Admin
router.get('/admin', (req, res) => {
  res.render('pages/admin', {pageTitle: 'Admin'})
})

router.use('/api/v0/', api);

module.exports = router

