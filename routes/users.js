'use strict';

const express = require('express');
const router = express.Router();
var wikifetch = require('wikifetch-modern').default;

// var _wikijs = require('wikijs');
// var _wikijs2 = _interopRequireDefault(_wikijs);
// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// var wiki = new _wikijs2.default();
// wiki.page('Batman').then(function (page) {
//     return page.info('alter_ego');
// }).then(console.log); // Bruce Wayne

/* GET home page. */
router.get('/', function(req, res, next) {
  let search = req.params.search
  wikifetch('batman')
  .then(article => {
    res.json(article);
  })
  .catch(err => {
    res.json(err)
  });
});

router.get('/search', function(req, res, next) {
  let search = req.query.search
  wikifetch(search)
  .then(article => {
    res.json(article);
  })
  .catch(err => {
    res.json(err)
  });
});

function getKey(params){
  var keys = [];
  for(var i = 0;i<params.length;i++){
    Object.keys(params[i]).forEach(function(key){
      if(keys.indexOf(key) == -1)
      {
        keys.push(key);
      }
    });
  }
  return key
}


module.exports = router;
