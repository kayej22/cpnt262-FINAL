const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber.js');


router.use(express.urlencoded({ extended: true}));

router.get('/', (req, res) =>{
  res.redirect('/')
});

router.post('/', (req, res) => {
  const subscriber = new Subscriber(req.body);
  subscriber.save((err, data) =>{
    if (err){
      res.send('<p>Problem subscribing. <a href="/subscribe">Please try again</a>.</p>')
    }
    res.send('<p>Success! Thanks for subscribing. <a href="/">Back to home</a>.</p>')
  })
});

module.exports = router