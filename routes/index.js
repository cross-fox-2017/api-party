'use strict';

const express = require('express');
const router = express.Router();
var weather = require("Openweather-Node")
var config = require('../auth.js')

//set your API key if you have one
weather.setAPPID(config.data);
//set the culture
weather.setCulture("en");
//set the forecast type
weather.setForecastType("daily"); //or "" for 3 hours forecast

router.get('/', function(req, res, next) {
  let location = req.query.location
  weather.now(location,function(err, aData){
    if(err) res.send(err);
    res.json(aData.values.weather[0])
  })
})

module.exports = router;
