var express = require('express');
var router = express.Router();
var imdb = require('imdb');
/* GET home page. */

//tt3659388

router.get('/:id', function(req, res, next) {
    imdb(req.params.id, function(err, data) {
        if (err)
            console.log(err.stack);
        if (data)
          keyword = data.title
          console.log(data.title);
          res.send(data.title);
    })
});







module.exports = router;
