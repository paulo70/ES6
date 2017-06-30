var nome = 'Joseph Lamber';

var es5 = 'hello ' + nome + '!';

console.log(es5); // hello Joseph Lamber!

// using template strings

var es6 = `hello ${nome}!`;

console.log(es6); 

// using function 

function upper(s){
	return s.toUpperCase();
} 

console.log(` Hey... ${upper('Danger')}!`); // Hey... DANGER! 
