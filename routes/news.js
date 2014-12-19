var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('news', { title: 'News input' });
});


/* POST sth the page */
router.post('/', function(req,res){
	console.log('Posted to news was:');
	console.log(req.body)
});

module.exports = router;

