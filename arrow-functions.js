const country = ['japan', 'island', 'ireland', 'german']


const likeCountry = country
  .filter(name => name === 'island')
  .map(name => `i like ${name}!`).join('')
console.log(likeCountry)