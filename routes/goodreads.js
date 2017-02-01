'use strict';
const express = require('express');
const router = express.Router();
var config = require('../auth.js')
var goodreads = require('goodreads');
var gr = new goodreads.client({ 'key': config.goodreads.key, 'secret': config.goodreads.secret });

router.get('/', function(req, res, next) {
  res.json("fail")
})

module.exports = router;
