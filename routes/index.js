var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
    console.log(req.app.get('debug'))
  res.render('index', { title: 'nodeNews', loglevel: req.app.get('debug')});
});

module.exports = router;
