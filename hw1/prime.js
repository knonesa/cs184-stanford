#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";

var prime = function(){
	var arr=[];
	for(var num=2;arr.length<100;num++){
	var prime=true;
		for(var m=2;m<=Math.ceil(num/2);m++){			
			if(num%m==0){
				prime=false;
			}
		}
		if(prime==true)
			arr.push(num);
	}
	return arr.join();
}
fs.writeFileSync(outfile, prime());
console.log(prime());
