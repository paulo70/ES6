function makeSandwich(bread,cheese,sauce){
 console.log(`your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done`)
}
 
let ingredients = ['white', 'cheddar', 'barbecue']

makeSandwich(...ingredients) //your sandwich with white bread, cheese cheese and sauce is done