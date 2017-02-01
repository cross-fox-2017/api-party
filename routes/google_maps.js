var express = require('express');
var router = express.Router();
var config = require('../config.json');

var googleMapsClient = require('@google/maps').createClient({
  key: config.GOOGLE_API_KEY
});

router.get('/', function(req,res){
  // Geocode an address.
  googleMapsClient.geocode({
    address: '1600 Amphitheatre Parkway, Mountain View, CA'
  }, function(err, response) {
    if (!err) {
      res.send(response.json.results);
    }
  });
})

module.exports = router;
