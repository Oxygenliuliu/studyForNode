let http = require('http');
let url = require('url');
let util = require('util');

function start(route) {
	function onRequest(request, response) {
	    var pathname = url.parse(request.url).pathname;
	    console.log("Request for " + pathname + " received.");
	 
	    route(pathname);
	 
	    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
		let data = [{name: '张三',age: 12},{name: '李四',age: 22}]
		response.write(JSON.stringify(data));
	    //全局变量
		console.log(_filename);
		console.log(_dirname);
		response.end();
	  }
	 
	// function onRequest(request, response){
		
	// 	let pathname = url.parse(request.url).pathname;
	// 	console.log('Request for' + pathname + 'received.');
		
	// 	route(pathname);
		
	// 	response.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"});
	// 	// response.setHeader('Content-Type', 'text/palin; charset=utf-8');
	// 	// response.writeHead(200);
	// 	let data = [{name: '张三',age: 12},{name: '李四',age: 22}]
	// 	response.write(JSON.stringify(data));
	// 	response.end();
	// }
	http.createServer(onRequest).listen(8888);
	console.log('Server has started');
}

const testForUtil = function(){
	function Base(){
		this.name = 'base';
		this.age = 1991;
		this.sayHello = function() {
			console.log('Hello', + this.name,1);
		}
	}
	Base.prototype.showName = function() {
		console.log(this.name,2);
	}
	function Sub() {
		this.name = 'sub';
	}
	util.inherits(Sub,Base);//继承原型上的属性
	let objBase = new Base();//继承全部
	objBase.showName();
	objBase.sayHello();
	console.log(objBase,3);
	let objSub = new Sub();
	objSub.showName();
	
	console.log(objSub,4);
}
exports.start = start;
exports.testForUtil = testForUtil;