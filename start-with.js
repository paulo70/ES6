const text = 'lorem ipsum dorem dorem borem gurti'

 // Using startsWith
 console.log(text.startsWith('lorem')) //true//

 console.log(text.startsWith('gu',30)) //true//

// Using endsWith

console.log(text.endsWith('gur',33)) //true//
console.log(text.endsWith('ti')) //true//

//Using includes//

console.log(text.includes('borem')) //true//
console.log(text.includes('ipsum'))//true//
console.log(text.includes('ip'))//true//
console.log(text.includes('lo'))//true//

//Using repeat///

console.log(text.repeat(5))