var express = require('express');
var router = express.Router();
var controller = require('../controller/controller')

/* GET home page. */
router.get('/:city', controller.getInfo);

module.exports = router;
