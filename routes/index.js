var express = require('express');
var router = express.Router();
const tweet = require('../controllers/controller.twatt');
const imdb = require('../controllers/controller.imdb');

/* get time line */
router.get('/timeline', tweet.timeline);
/* GET home page. */
router.get('/search/:search', tweet.search);
/* get imdb */
router.get('/search/actorTweet/movie/:title', imdb.getActorTweet)


module.exports = router;
