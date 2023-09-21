const person = {
    name:"Jithendra",
    age:23,
    greet:function(){
        console.log("Hi Friends "+this.name);
    }
}

// person.greet();

console.log(person);

// console.log(person.name);
// console.log(person.age);

console.log(person["name"]);

person["greet"]();