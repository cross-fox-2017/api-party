var express = require('express');
var router = express.Router();
var config = require('../config.json')
var weather = require('npm-openweathermap');
weather.api_key = '2b9939c2646b67990fd3fde583b7a225';
weather.temp = 'c';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome yomatwit' });
});


router.get('/search', function(req,res,next){
  let quer = req.query.q
  weather.get_weather_custom('city', quer, 'forecast').then(function(hasil){
    // hasil = hasil[0].main
      res.send(hasil);
  },function(error){
      res.send(error)
  })
})

module.exports = router;
