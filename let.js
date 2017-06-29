// var is global is not block
{{{{var test = 'hello'}}}}

console.log(test);

var number = 1;


// using let
{
	let number = 2;
	console.log('inside block', number);
}

console.log('outside block', number);

// using a loop with var

for(var i = 0; i < 10; i++){};

console.log('i:', i);

// using a loop with let

for(let j = 0; j < 10; j++){};

console.log('using let j:', j);


