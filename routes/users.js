/*jslint node: true, unparam: true */
/*global res, req, err */

"use strict";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

module.exports = router;
