
do not to declare the same variable at inside scope

var withproblem = 1;

let withproblem = 2;

console.log(withproblem); //SyntaxError: Identifier 'withproblem' has already been declared

// const without attribution
const a;
a = 10;

console.log(a); // SyntaxError: Missing initializer in const declaration



