function multiplys(multi, arg1, arg2, arg3){
  let arg = []

  arg.push(multi * arg1)
  arg.push(multi * arg2)
  arg.push(multi * arg3) 

  return arg
}

console.log(multiplys(2,1,4,3)) // [ 2, 8, 6 ]

// using rest params ...
function multiply(multi,...args){
	return args.map(arg => arg * multi)
}

console.log(multiply(3,2,4,5)) // [ 6, 12, 15 ]



