/*jslint node: true, unparam: true */
/*global res, req, err */

"use strict";

var express = require('express');
var router = express.Router();
var redis = require("redis");
var client = redis.createClient();


client.on("error", function (err) {
  console.log("error event - " + client.host + ":" + client.port + " - " + err);
});

/* GET home page. */
router.get('/', function (req, res) {

  // get all items of newsItems
  client.lrange('newsItems', 0, -1, function (error, items) {
    if (error) {
      console.log("error@" + client.host + ":" + client.port + " - " + err);
      throw error;
    }
    res.render('index',
                { title: 'nodeNews',
                loglevel: req.app.get('debug'),
                newsItems: items.reverse(),
                });
  }); // query callback
});

module.exports = router;
