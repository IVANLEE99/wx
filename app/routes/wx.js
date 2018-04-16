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

var s = `<xml>  
<ToUserName>< ![CDATA[${toUser}] ]></ToUserName>  
<FromUserName>< ![CDATA[${toUser}] ]></FromUserName>  
<CreateTime>1348831860</CreateTime>  
<MsgType>< ![CDATA[text] ]></MsgType>  
<Content>< ![CDATA[this is a test] ]></Content>  
<MsgId>1234567890123456</MsgId>  
</xml>`
  res.send(s);
});

module.exports = router;
