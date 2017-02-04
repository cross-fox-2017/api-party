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
// router.post('/', function(req, res, next) {
//   let ingredients = req.body.ingredients
//   let search = req.body.search
//   let page = req.body.page
//   unirest.get('http://www.recipepuppy.com/api/')
//   .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
//   .send({ 'i': ingredients, 'q': search, 'p': page })
//   .end(function (response) {
//     console.log(ingredients);
//     res.json(response.body.results)
//   });
// })

module.exports = router;
