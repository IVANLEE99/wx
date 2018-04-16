var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
//   console.log(req);
  var msg = req.query.echostr;
  res.send(msg);
});
/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body,':body');
  console.log(req.params,':params');
  console.log(req.query,':query');
  var toUser = req.query.openid;
  var fromUserName = 'IVANLEE99-LLFFOREVER'
  var time = new Date().getTime();
  res.send('');
});

module.exports = router;
