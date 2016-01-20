'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),  
    listings = require('./listings.json');

/* Connect to your database */

mongoose.connect(config.db.uri, function(err) {
  if (err) throw err;
});

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

var length = listings.entries.length;
for (var i = 0; i < length; i++) {
  var temp = new Listing({
    code: listings.entries[i].code,
    name: listings.entries[i].name,
    coordinates: listings.entries[i].coordinates,
    address: listings.entries[i].address
  });
  temp.save(function(err) {
    if (err) throw err;
  });
};


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
});