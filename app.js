var SpotifyWebApi = require('spotify-web-api-node');
const express = require('express')
const app = express()
const router = express.Router()
const config = require('./config.js')
const Twit = require('twit')
var billboard = require("billboard-top-100").getChart;

const T = new Twit({
  consumer_key:         config.consumer_key,
  consumer_secret:      config.consumer_secret,
  access_token:         config.access_token,
  access_token_secret:  config.access_token_secret,
  //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
var spotifyApi = new SpotifyWebApi({
  clientId : config.id,
  clientSecret : config.secret
});

router.get('/music/:song',function(req,res){
  var song = req.params.song
  spotifyApi.searchTracks(song)
    .then(function(data) {
      res.send(data.body);
    }, function(err) {
      console.error(err);
    });

})

router.get('/trendMusic/:num',function(req,res){
  billboard('hot-100', function(songs, err){
      if (err) console.log(err);
      res.send(songs[(req.params.num)-1].title); //prints song with rank: 4
  });
})

router.get('/playtrendmusic/:num',function(req,res){

  billboard('hot-100', function(songs, err){
      if (err) console.log(err);
      var song = songs[(req.params.num)-1].title

      spotifyApi.searchTracks(song)
        .then(function(data) {
          res.redirect(data.body.tracks.items[0].album.external_urls.spotify);
        }, function(err) {
          console.error(err);
        });
  })
})

app.use('/',router)
app.listen(3000)
