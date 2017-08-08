const city = 'Manhattan';
const something = 'New York';
const outherthing = 'EUA';

function addColor(template, ...values) {
  return template.reduce((acc, item, i) => {
    return `
   ${acc}
   <span class"green">${values[i -1].toUpperCase()}</span>
   ${item} 
   `
  });
}


const newYork = addColor `I live in ${city} the city of ${something} and ${outherthing}`;

document.body.innerHTML = newYork;