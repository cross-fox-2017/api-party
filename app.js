const express = require('express')
const router = express.Router()

const Twitter = require('twitter')
const Instagram = require('node-instagram').default

const config = require('./config');

const app = express()

const twitter = new Twitter({
  consumer_key: config.twitter.CONSUMER_KEY,
  consumer_secret: config.twitter.CONSUMER_SECRET,
  access_token_key: config.twitter.ACCESS_KEY,
  access_token_secret: config.twitter.ACCESS_SECRET
});

const instagram = new Instagram({
  clientId: config.instagram.CLIENT_ID,
  accessToken: config.instagram.ACCESS_TOKEN
});

router.get('/stalk',function(req, res) {

    const stalkingTarget = req.query.q

    instagram.get('users/search', { q: stalkingTarget })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
      res.send(err)
    })

  twitter.get('users/search', {q : stalkingTarget}, function(error, tweets, response) {

      res.send(tweets);
    })




})

app.use('/', router)
app.listen(3000)
