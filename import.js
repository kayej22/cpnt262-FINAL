const mongoose = require('./_connection.js') 

// Import seed data
const dbSeed = require(`./seeds/gallery`);
const dbSeed = require(`./seeds/member`);
const dbSeed = require(`./seeds/subscriber`);
// Define model
const Animal = require(`./models/Gallerie`);
const Animal = require(`./models/Member`);
const Animal = require(`./models/Subscriber`);

Animal.insertMany(dbSeed, function(error, animal) {
  console.log('Data import completed.')
  mongoose.connection.close();
});