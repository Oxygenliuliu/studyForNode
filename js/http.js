let http = require('http');
let url = require('url');
let util = require('util');

function creatHttp(){
	http.createServer((req,res)=>{//获取http请求信息
		res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'})
		res.end(util.inspect(url.parse(req.url,true)));//util.inspect()对象转换成字符串
	}).listen(8888);
}
function getGetParams(){
	http.createServer((req,res)=>{
		res.writeHead(200, { //原生处理跨域问题
		'Content-Type':'application/json;charset=utf-8',
		'Access-Control-Allow-Credentials':true,
		'Access-Control-Allow-Origin':'*'//可以是*，也可以是跨域的地址
		})
		
		//解析url
		let params = url.parse(req.url,true).query;
		let userName = params.name;
		let password = params.password;
		let data = {'userName': userName,'password': password};
		res.write(JSON.stringify({'status': 0, 'message': 'ok','data': data}));
		res.end();
	}).listen(8888)
}
function getPostParams(){
	http.creatServer((req,res)=>{
		res.writeHead(200, {
			'Content-type':'application/json;charset=utf-8',
			'Access-Control'
		})
	})
}
getGetParams();
// creatHttp();