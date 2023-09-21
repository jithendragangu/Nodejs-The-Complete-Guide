var name = 'raghu';
var age = 24;
var hobby = 'coding';

function ajithChandana(userName, userAge, hobby) {
  return (
    'My name is ' +
    userName +
    ' age is ' +
    userAge +
    ' the user has hobby has ' +
    hobby
  );
}

function printName(name) {
  console.log(name);
}

var userDetails = ajithChandana(name, age, hobby);

printName(name);

console.log(userDetails);
