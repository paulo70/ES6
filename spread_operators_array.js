
// using concat//

let itens = ['knife', 'spoon', 'fork']
let otherItens = ['plate', 'glass', 'cup']

let allThings = itens.concat(otherItens)

console.log(allThings) // [ 'knife', 'spoon', 'fork', 'plate', 'glass', 'cup' ]

// using spread operators

let all = [...itens, ...otherItens]
console.log(all) // [ 'knife', 'spoon', 'fork', 'plate', 'glass', 'cup' ]

