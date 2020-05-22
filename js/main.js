// 读取config.json文件

let fs = require('fs');
let url = '../json/config.json';
fs.readFile(url,(err,data)=>{
	if(err){
		return console.log(err,'错误信息')
	}
	console.log('异步读取内容: ' + data)
})