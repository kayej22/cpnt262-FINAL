const express = require('express');
const Gallerie = require('../../models/gallery.js')
const Member = require('../../models/member.js')
const Subscriber = require('../../models/subscriber.js')


const router = express.Router();



//gallery JSON
router.get('/gallery', (req, res) => {
  Gallerie.find({}, (err, images) => {
    if (err) {
      res.status(404)
    
    }
    res.json(images)
  })
})

//single image JSON

router.get('/images/id', async (req, res, next) => {

  try {
    const gallery = await Gallerie.find({});
    if (gallery) return res.json(gallery);
    return next(new Error('failed to convert database objects into json'));
  } catch (err) {
    return next(err);
  }
});


//team members JSON
router.get('/members', (req, res) => {

  Member.find({}, (err, images) => {
    if (err) {
      res.status(404)
    
    }
    res.json(images)
  })
});

//subscribers JSON
router.get('/subscribers', (req, res) => {

  Subscriber.find({}, (err, images) => {
    if (err) {
      res.status(404)
    
    }
    res.json(images)
  })
});

module.exports = router