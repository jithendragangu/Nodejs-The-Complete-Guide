const person = {
  name: 'jithendra',
  age: 23,
  greet: function () {
    console.log('Hi, I am ' + this.name);
  },
};

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;

console.log(name);
console.log(age);

// const person1 = {
//   name: 'jithendra',
//   age: 23,
//   greet() {
//     console.log('Hi, I am ' + this.name);
//   },
// };

// console.log(person);
// console.log(person1);

// person.greet();
// person1.greet();
