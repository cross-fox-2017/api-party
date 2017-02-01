const tweet = require('../helper/twitterHelper');
const imdb = require('imdb-api');

var controllerImdb = {
  getActorTweet: function(req, res, next) {
    console.log(req.params.title);
    imdb.get(req.params.title).then(function(data){
      var actorArray = data.actors
      actorArray = actorArray.split(",")
      console.log("you search actor is : " + actorArray[0]);
      tweet.getTweet(actorArray[0], function(data){
        let obj = JSON.parse(data)
        res.json(obj);
      })

    });
  }
}

module.exports = controllerImdb
