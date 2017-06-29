// using var for value

var a = 10;

var b = a;

a = 5; // change a value but variable b keeps the same value

console.log('a', a); // console.log(5);

console.log('b', b); // console.log(10)

// using var for reference

var product = {
	name: 'ipad 2'
}

product.name = 'macbook';
console.log(product); // macbook

product = {};
console.log(product); // {}

// using const it happens the same thing

const product1 = {
	name: 'imac'
}

product1.name = 'macbook'; 
console.log(product1) // macbook

// but if you change the reference that const is appointed gets a error
product1 = {};

console.log(product1); // TypeError: Assignment to constant variable.
