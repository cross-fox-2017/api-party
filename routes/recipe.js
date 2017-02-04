'use strict'
const express = require('express');
const router = express.Router();
var request = require('superagent');

router.get('/', function(req, res){
  res.send('welcome to get recipe')
})

router.post('/', function(req, res, next) {
  let ingredients = req.body.ingredients
  let search = req.body.search
  let page = req.body.page
  let url = `http://www.recipepuppy.com/api/`
  request
  .get(url)
  .query({ i: ingredients, q: search, p: page })
  .end(function(err, response){
    res.json(JSON.parse(response.text))
  });
})

module.exports = router;
