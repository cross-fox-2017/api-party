const tweet = require('../helper/twitterHelper');
const imdb = require('imdb-api');

var controllerImdb = {
  getActorTweet: function(req, res, next) {
    console.log(req.query.title);
    console.log(req.query.select);
    imdb.get(req.query.title).then(function(data){
      /* just get the movie actor and conver it into array*/
      let actor = "";
      var selectActor = parseInt(req.query.select);
      let actorArray = data.actors;
      actorArray = actorArray.split(",");

      /* validate if select more then array */
      if(actorArray.length <= selectActor || !req.query.select){
        /* true */
        selectActor = 0
      }

      // cek undifind
      // ! undefined => true beacuse undefined is false
      // if(!req.query.select){
      //   selectActor = 0
      // }

      /* print list of actor */
      console.log(`movie : ${req.query.title}`);
      console.log(`actors : ${data.actors}`);
      console.log(`you actor select is : ` + actorArray[selectActor].trim());

      /* validate null */
      if(actorArray[selectActor] == null ){
        actor = actorArray[0]
      }else{
        actor = actorArray[selectActor]
      }

      // search actor tweet
      tweet.getTweet(actor, function(data){
        let obj = JSON.parse(data)
        res.json(obj);
      })

    });
  },

}

module.exports = controllerImdb
