const person = [{
    name: 'james',
    age: 40,
    sex: 'male'
  },

  {
    name: 'sandoval',
    age: 45,
    sex: 'male'
  }

]

const find = person.find((people)=> people.name === 'sandoval')
console.log(find)