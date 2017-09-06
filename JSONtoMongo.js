'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
    var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config.js');
    //JSON.parse
/* Connect to your database */
    mongoose.connect('mongodb://cyrusnaj:818Jklpuzo@ds129144.mlab.com:29144/cyrusnajmicen3031assignment3')
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
    const code = mongoose.model('code', Schema);
    const name = mongoose.model('name', Schema);
    const coodrinates = mongoose.model('coordinates', Schema);
    const address = mongoose.model('address', Schema);
/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
