const express = require('express');
const router = express.Router();
const Twitter = require('twitter');
var config = require('../config.json')
// var search = require('youtube-search');
var YouTube = require('youtube-node');
var youTube = new YouTube();

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
    if(trend){

      // Built by LucyBot. www.lucybot.com

      youTube.setKey('AIzaSyBzoV1Ucl0yz0D8XnB1ej3ABGVD8xeqWas');

      youTube.search(trend, 2, function(error, result) {
          if (result.items[0]) {
            var videoResult = result.items[0].id.videoId
            if (error) {
              res.send(error);
            }
            else {
              res.redirect('https://www.youtube.com/watch?v='+videoResult);
            }
          }
          else {
            res.send('no data')
          }

      });
    }
    else {
      res.send('no trending topic available')
    }
  })

})

router.get('api/twitter/callback', function(req, res, next) {
    res.send('wrong');
})


module.exports = router;
