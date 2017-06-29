
// using var

var funcs = [];

for(var i = 0; i < 10; i++){
	funcs.push(function(){
		console.log(i);
	});
}

console.log(funcs[2]()); // 10
console.log(funcs[5]()); // 10

// using variable you get right value that is at position j

var funcs2 = [];

for(let j = 0; j < 10; j++){
	funcs2.push(function(){
	console.log(j);
	});
}

console.log(funcs2[2]()); // 2
console.log(funcs2[3]()); // 3
