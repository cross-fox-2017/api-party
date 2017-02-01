var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var config = require('../config.json');
/* GET home page. */

var client = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});

router.get('/user', function(req,res){
  const search_query = {screen_name: req.query.q}
  client.get('statuses/user_timeline', search_query, function(error, tweets, response) {
     res.send(tweets);
  });
})

module.exports = router;
