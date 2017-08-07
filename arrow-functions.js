(function() {
 const country = ['island', 'japan','russia', 'german'];

 const likeCountry = country
 .filter(name => name === 'german')
 .map(name => `i like ${name}!`)

 console.log(likeCountry);
})();