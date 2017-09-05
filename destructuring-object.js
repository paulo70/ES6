(function() {
  function person(name='lance', surname='moutain'){
  	console.log(`Hello ${name} ${surname} welcome`)
  }

  person() //without pass parameter// //Hello undefined undefined welcome//
  person() //with parameter// //Hello lance moutain welcome//
})()