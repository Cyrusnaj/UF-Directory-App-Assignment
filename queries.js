/* Fill out these functions using Mongoose queries*/

const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Listing = require('./ListingSchema.js'),
      config = require('./config');

// Connecting to the db

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */

  Listing.find({
    name: 'Library West'
  }, (err, entity) => {

    if (err) {
      throw err;
    }

    console.log(JSON.stringify(entity));
  });


};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This corresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */

  Listing.find({
    code: 'CABL'
  }, (err, entities) => {
    if (err) {
      throw err;
    }

    for(let i = 0; i < entities.length; i++) {
      entities[i].remove((err) => {
        if (err) {
          throw err;
        }

        console.log(entities[i]);

      });
    }
  });

};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.findOne({ "name": "Phelps Laboratory" }, 'code name address coordinates', function (err, listing) {
    if (err) return handleError(err);
    console.log(listing)
    listing.address = "102 Phelps Lab, Gainesville, FL 32611";
    listing.save(function(err) {
      if (err) throw err;

      console.log('updated listing');
    });
   });
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */

  Listing.find({}, (err, entities) => {
    if (err) {
      throw err;
    }

    for (let i = 0; i < entities.length; i++) {
      console.log(entities[i]);
    }
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
