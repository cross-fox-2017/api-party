var express = require('express');
var router = express.Router();
var config = require('../config.json');
var request = require('superagent');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/restaurant', function(req, res, next) {
  console.log(req.query.q);

  request
  .get('https://developers.zomato.com/api/v2.1/search?q='+req.query.q+'&count=2')
  .set('user-key', config.userKey)
  .set('Accept', 'application/json')
  .end(function(err, response){
    // Calling the end function will send the request
    if(!err){
      res.json(JSON.parse(response.text))
    }
  });


});

module.exports = router;
