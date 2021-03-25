const mongoose = require('./connection.js') 

// Import seed data
const galSeed = require(`./seeds/gallery`);
const memSeed = require(`./seeds/member`);
const subSeed = require(`./seeds/subscriber`);
// Define model
const Gallery = require(`./models/Gallery`);
const Member = require(`./models/Member`);
const Subscriber = require(`./models/Subscriber`);

Gallery.insertMany(galSeed, function(error, animal) {
  console.log('Data import completed.')
});
Member.insertMany(memSeed, function(error, animal) {
  console.log('Data import completed.')
});
Subscriber.insertMany(subSeed, function(error, animal) {
  console.log('Data import completed.')
});