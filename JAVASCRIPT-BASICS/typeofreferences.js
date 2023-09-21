// // PRIMITIVE VALUES

// //String
// var name = 'Jithendra';
// //Number
// var age = 23;
// //Boolean
// var major = true;
// //Undefined
// var user;
// console.log(user);
// //Null
// var user1 = null;
// console.log(user1);

// var name = 'sunny';
// console.log(name);

// var secondPerson = name;
// console.log(name);

// name = 'jithendra';
// console.log(secondPerson);

var person = {
  age: 23,
  name: 'jithendra',
  hobbies: ['Reading', 'Codding'],
};
console.log(person);

// var secondPerson = person;
var secondPerson = Object.assign({ lastName: 'gangu' }, person);
console.log(secondPerson);

var myHobbies = person.hobbies.slice();

person.name = 'sunny';
person.hobbies.push('Reading');
console.log(secondPerson);

var thirdPerson = {
  age: 23,
  name: 'jithendra',
  hobbies: ['Reading', 'Codding'],
};

console.log(thirdPerson);

console.log(myHobbies);
