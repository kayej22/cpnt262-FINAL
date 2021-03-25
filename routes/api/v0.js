const express = require('express');
/// Model requires go here ////

const router = express.Router();

const Gallerie = require('../../models/gallery')
const Member = require('../../models/member')
const Subscriber = require('../../models/subscriber')


//gallery JSON
router.get('/gallery', (req, res) => {

  //find() method after models have been built ///

  // Image.find({}, (err, images) => {
  //   if (err) {
  //     res.status(404)
    
  //   }
  //   res.json(images)
  // })
})

//single image JSON

router.get('/images/id', async (req, res, next) => {

  //find() method after models have been built ///

  // try {
  //   const gallery = await Image.find({});
  //   if (gallery) return res.json(gallery);
  //   return next(new Error('failed to convert database objects into json'));
  // } catch (err) {
  //   return next(err);
  // }
});


//team members JSON
router.get('/gallery', (req, res) => {
  
  //find() method after models have been built ///

  // Image.find({}, (err, images) => {
  //   if (err) {
  //     res.status(404)
    
  //   }
  //   res.json(images)
  // })
})

//subscribers JSON


module.exports = router