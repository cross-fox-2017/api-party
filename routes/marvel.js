'use strict';
const express = require('express');
const router = express.Router();
var config = require('../auth.js')
var api = require('marvel-api');

var marvel = api.createClient({
  publicKey: config.marvel.publicKey
, privateKey: config.marvel.privateKey
});

router.get('/', function(req, res, next) {
  marvel.characters.findAll(1, 1400)
  .then(function(data){
    console.log(data);
    res.json(data)
  })
  .fail(console.error)
  .done();
})

module.exports = router;
