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
weather.api_key = '2b9939c2646b67990fd3fde583b7a225';
weather.temp = 'c';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome yomatwit' });
});

router.get('/search', function(req,res,next){
  let quer = req.query.q
  weather.get_weather_custom('city', quer, 'forecast').then(function(hasil){
      hasil='Based on data '+hasil[0].dt_txt+', there is will '+hasil[0].weather[0].description+' on '+quer
      let twittt = {status: hasil}
      client.post('statuses/update', twittt, function(error, data, response) {
        if (error) throw error;
      res.send(data)
      })
  })
})

module.exports = router;
