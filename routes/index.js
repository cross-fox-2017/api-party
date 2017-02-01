var express = require('express');
var router = express.Router();
var config = require('../config.json');
var wikipedia = require('wikipedia-js');

var googleMapsClient = require('@google/maps').createClient({
  key: config.GOOGLE_API_KEY
});

router.post('/request', function(req, res) {
  // melakukan logic dari google maps
  // melakukan logic search wikipedia

  requestMaps(req.body.location, function(locate){
    requestWikipedia(locate, function(result){
      res.send(result)
    })
  })
})

function requestMaps(parameter, cb) {
  // Geocode an address.
  googleMapsClient.geocode({
    address: parameter
  }, function(err, response) {
    if (!err) {
      let location = response.json.results[0].formatted_address
      // let location = response.json.results
      cb(location)
    }
  });
};

function requestWikipedia(parameter, cb) {
  var query = parameter;
  var options = {query: query, format: "json", summaryOnly: true};

  wikipedia.searchArticle(options, function(err, htmlWikiText){
    if(err){
      console.log("An error occurred[query=%s, error=%s]", query, err);
      return;
    }
    // console.log("Query successful[query=%s, html-formatted-wiki-text=%s]", query, htmlWikiText);
    let wiki = JSON.parse(htmlWikiText)
    cb(wiki)
  });
};

module.exports = router;
