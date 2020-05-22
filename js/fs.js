const openFs = function(){ //打开文件
	let fs = require('fs');
	//异步读写文件
	fs.open('../json/config.json','r+',(err,fd)=>{
		if(err) {
			return console.error(err);
		}
		console.log('文件打开成功,内容为'+fd)
	})
}
const readFs = function(){ //读取文件
	console.log('准备读取文件');
	let fs = require('fs');
	fs.stat('../json/config.json',(err,stats)=>{
		if(err){
			return console.error(err);
		}
		console.log(stats)
		console.log('读取文件信息成功!');
		//检查文件类型
		console.log('是否为文件(isFile)?' + stats.isFile());
		console.log('是否为目录(isDirectory)?' + stats.isDirectory());
		console.log('是否为设备(isBlockDevice)?' + stats.isBlockDevice());
		console.log('是否为字符设备(isCharacterDevice)?' + stats.isCharacterDevice());
		console.log('是否为软连接(isSymbolicLink)?' + stats.isSymbolicLink());
		console.log('是否为FIFO(isFIFO)?' + stats.isFIFO());
		console.log('是否为Socket(isSocket)?' + stats.isSocket());
	})
}
const writeFs = function(){ //写入文件
	let fs = require('fs');
	console.log('准备写入文件');
	let obj = {"name":"小天","age":20};
	fs.writeFile('../json/config.json',JSON.stringify(obj),err=>{
		if(err){
			return console.error(err)
		}
		console.log('数据写入成功');
		console.log('------------分割线--------------');
		console.log('读取写入的数据');
		fs.readFile('../json/config.json',(err,data)=>{
			if(err){
				return console.error(err);
			}
			console.log('异步读取文件数据: '+ data);
		})
	})
}

const readAndWrite = function (){
	let fs = require('fs');
	console.log('准备读取文件');
	fs.readFile('../json/config.json',(err,data)=>{
		if(err){
			return console.error(err)
		}
		console.log('更改前的文件内容: ' + data);
		let configData = JSON.parse(data);
		configData.name = '小明';
		fs.writeFile('../json/config.json',JSON.stringify(configData),err=>{
			if(err){
				return console.error(err)
			}
			console.log('再次读取文件内容')
			fs.readFile('../json/config.json',(err,data)=>{
				if(err){
					return console.error(err)
				}
				console.log('更改后的文件内容: ' + data)
			})
		})
	})
}
const read = function(){
	
}
readAndWrite()
// writeFs();
// readFs()
// openFs();