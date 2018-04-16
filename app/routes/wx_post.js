var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req);
  var msg = req.query.echostr;
  res.send(msg);
});

module.exports = router;
