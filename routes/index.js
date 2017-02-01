var express = require('express');
var router = express.Router();
var imdb = require('imdb');
var request = require('request');
/* GET home page. */

//tt3659388  //the-martian
//tt4991652  //camino
//tt2611074  //Sheila Vand
router.get('/:id', function(req, res, next) {
    imdb(req.params.id, function(err, data) {
        if (err)
            console.log(err.stack);
        if (data)
        var title = data.title.split(" ")
        var keyword = "http://lk21.tv/"
        for (var i = 0; i < title.length; i++) {
          if(i==title.length-1){
            keyword+=title[i]
          }else{
            keyword+=title[i]+"-"
          }
        }
        request(keyword, function(error, response, body) {
            if (/Maaf, halaman yang anda cari tidak dapat kami temukan/g.test(body) == true) {
                res.send({
                  status:"Film Dalam Proses Pembajakan, Mohon Sabar Menunggu"
                });
            } else {
                res.send({
                  linkDownload: keyword
                });
            }
        })
    })
});


module.exports = router;
