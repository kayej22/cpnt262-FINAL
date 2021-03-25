// load mongoose
const mongoose = require('mongoose')

// define our Schema
const gallerySchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String,
    imgSrc: String,
    width: Number,
    height: Number
  }
)

// compile and export Schema
module.exports = mongoose.model('Gallerie', gallerySchema)