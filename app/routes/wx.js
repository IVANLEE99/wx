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
  // console.log(req.body,':body');
  // { xml:
  //   { tousername: [ 'gh_97296cad7184' ],
  //     fromusername: [ 'o7i2V1PDjnUCRpPssALMi2caVsuI' ],
  //     createtime: [ '1523889693' ],
  //     msgtype: [ 'text' ],
  //     content: [ '你是最棒的！' ],
  //     msgid: [ '6545056394573526012' ] } } ':body'
  console.log(req.params,':params');
  console.log(req.query,':query');
  var toUser = req.query.openid;
  var fromUserName = 'IVANLEE99-LLFFOREVER'
  var time = new Date().getTime();
  var data = {
    fromusername:req.body.xml.fromusername,
    tousername:req.body.xml.tousername,
    content:'终于等到你,还好我没放弃!'
  }
  msgText(res,data)
});

function msgText(res,data){
  //fromusername 接受者openid
  //tousername  发送者openid
  res.set('Content-Type', 'application/xml');
  res.status(200);
   var resMsg = '<xml>' +
      '<ToUserName><![CDATA[' + data.fromusername + ']]></ToUserName>' +
      '<FromUserName><![CDATA[' + data.tousername + ']]></FromUserName>' +
      '<CreateTime>' + parseInt(new Date().valueOf() / 1000) + '</CreateTime>' +
      '<MsgType><![CDATA[text]]></MsgType>' +
      '<Content><![CDATA['+data.content+']]></Content>' +
      '</xml>';
     res.send(resMsg);
    
}

module.exports = router;
