const name = 'paulo'

console.log(Array.from(name)) //[ 'p', 'a', 'u', 'l', 'o' ]//

const $list = document.querySelectorAll('[data-js="list"]')

//Using old method//
const arr = Array.prototype.map.call($list, (list) =>{
	return list.textContent
})

console.log(arr)//["Monet" ,"Basquiat", "Picasso", "Modigliani"]//

//Using Arrayfrom//

const newArr = Array.from($list).map((list)=> list.textContent
)

console.log('using array from', newArr)//["Monet" ,"Basquiat", "Picasso", "Modigliani"]//

