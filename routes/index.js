var express = require('express');
var router = express.Router();

//设置服务器的缓存
var comments={};

//编码
function html_encode(str){
	var s='';
	if(str.length==0) return "";
	s=str.replace(/&/g,"&gt;");
	s=s.replace(/</g,"&lt;");
	s=s.replace(/\s/g,"&nbsp;");
	s=s.replace(/\'/g,"&#39;");
	s=s.replace(/\"/g,"&quot;");
	s=s.replace(/\n/g,"<br>");
	return s;

}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('X-XSS-Protection',0);	
  //res.render('index',{title:'xss反射型演示', xss:req.query.xss});
  res.render('index',{title:'express1'});//获取xss输入的xss字段
});

//设置评论接口
router.get('/comment',function(req,res,next){
	comments.v=req.query.comment;
});

//获取评论的接口
router.get('/getComment',function(req,res,next){
	res.json({
		comment:comments.v
	})
});
module.exports = router;
