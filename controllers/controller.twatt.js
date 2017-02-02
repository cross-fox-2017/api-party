const tweet = require('../helper/twitterHelper');

var controllerTweet = {
  search: function(req, res, next) {
    console.log(req.params.search);
    tweet.getTweet(req.params.search, function(data){
      var obj = JSON.parse(data)
      res.json(obj)
    })
  },
  timeline: function(req, res, next){
    console.log('ini query : ', req.query.count);
    tweet.getTweetTimeline(req.query.count, function(data){
      var obj = JSON.parse(data)
      res.json(obj)
    })

  }
}

module.exports = controllerTweet
