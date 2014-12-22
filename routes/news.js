var express = require('express');
var router = express.Router(),
    redis = require("redis"),
    client = redis.createClient();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('news', { title: 'News input' });
});


/* POST sth the page */
router.post('/', function(req,res){
    storeString = req.body.content;
    console.log('Posted to news was: ' + storeString);
    client.lpush('newsItems',storeString);
    res.status(200).end();
});
   




module.exports = router;

