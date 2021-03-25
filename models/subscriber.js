// load mongoose
const mongoose = require('mongoose')

// define our Schema
const subscriberSchema = new mongoose.Schema(
  {
    name: String,
    email: String
  }
)

// compile and export Schema
module.exports = mongoose.model('Subscriber', subscriberSchema)