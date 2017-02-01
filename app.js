var SpotifyWebApi = require('spotify-web-api-node');
const express = require('express')
const app = express()
const router = express.Router()
const config = require('./config.js')

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

app.use('/',router)
app.listen(3000)
