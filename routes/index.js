const express = require('express');
const router = express.Router();
const Twitter = require('twitter');
var config = require('../config.json')
var search = require('youtube-search');

var client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

router.get('/trends', function (req, res, next) {
  var cekTrends = {id: req.query.q}

  client.get('trends/place', cekTrends, function(error, tweets, response) {
    var trend = tweets[0].trends[0].name
    if(!error){
      var opts = {
        maxResults: 10,
        key: 'AIzaSyBzoV1Ucl0yz0D8XnB1ej3ABGVD8xeqWas'
      };

      search(trend, opts, function(err, results) {
        if(err) return console.log(err);

        res.send(results);
      });
    }
  })

})


router.get('api/twitter/callback', function(req, res, next) {
    res.send('wrong');
})


module.exports = router;
