var express = require('express');
var router = express.Router();
var config = require('../config.json')
var weather = require('npm-openweathermap');
var Twit = require('twit')
var client = new Twit({
  consumer_key:         config.consumer_key,
  consumer_secret:      config.consumer_secret,
  access_token:         config.access_token,
  access_token_secret:  config.access_token_secret,
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcomel' });
});


var YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey('AIzaSyAJqZEC7ND-JsuikdgHNJZsZCsEScfTO18');


router.get('/search', function(req,res,next){
  let quer = req.query.q
  youTube.search(quer, 1, function(error, result) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(JSON.stringify(result, null, 1));
    }
  })
})

module.exports = router;
