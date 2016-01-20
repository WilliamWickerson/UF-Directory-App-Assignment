/* Fill out these functions using Mongoose queries*/
'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    listings = require('./listings.json');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({name: 'Library West'}, function(err, listing) {
    if (err) throw err;
    console.log('User Found:');
    console.log(listing);
    console.log();
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({code: 'CABL'}, function(err, listing) {
    if (err) throw err;
    console.log('Listing deleted:');
    console.log(listing);
    console.log();
  });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console.
   */
  Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: '100 Phelps Lab, P.O. Box 116350, Gainesville, FL 32611'}, function(err, listing) {
    if (err) throw err;
    console.log('Listing updated:');
    console.log(listing);
    console.log();
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, listings) {
    if (err) throw err;
    console.log('Listings:');
    console.log(listings);
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();