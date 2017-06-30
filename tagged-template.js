function transformReal(strings, ...values){
	const resultado = [];

	values.forEach(function(value, index){
       value = (typeof value == 'number')
       ? ` R$${value.toFixed(2)} `
       : value;

       resultado.push(strings[index], value);
	});

	return resultado.join('');
}



let price = 29.99
let parcel = 11;

console.log(transformReal `1 x de ${price} ou 3x de ${parcel}`);
