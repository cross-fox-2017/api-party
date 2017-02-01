const OAuth = require('oauth');

var myoauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/'+process.env.ACCESS_TOKEN_SECRET,
      'https://api.twitter.com/oauth/'+process.env.ACCESS_TOKEN,
      process.env.CUSTOMER_KEY,
      process.env.CUSTOMER_SECRET,
      // 'your application consumer key',
      // 'your application secret',
      '1.0A',
      null,
      'HMAC-SHA1'
    );

module.exports = {
  getTweet: function(search, callback){
    myoauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=' + search,
      process.env.ACCESS_TOKEN,
      process.env.ACCESS_TOKEN_SECRET,
      // 'your user token for this app', //test user token
      // 'your user secret for this app', //test user secret
      function (e, data, res){
        if (e) console.error(e);
        callback(data)
    });
  },
  getTweetTimeline: function(count, callback){
    
    myoauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?count=' + count,
      process.env.ACCESS_TOKEN,
      process.env.ACCESS_TOKEN_SECRET,
      // 'your user token for this app', //test user token
      // 'your user secret for this app', //test user secret
      function (e, data, res){
        if (e) console.error(e);
        callback(data)
    });
  }
}
