// load mongoose
const mongoose = require('mongoose')

// define our Schema
const memberSchema = new mongoose.Schema(
  {
    name: String,
    profilePic: String,
    title: String,
    bio: String,
    github: String
  }
)

// compile and export Schema
module.exports = mongoose.model('Member', memberSchema)