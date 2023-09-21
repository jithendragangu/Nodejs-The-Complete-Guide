// function square(num) {
//   return num * num;
// }

// var square = function (num) {
//   return num * num;
// };

// var square = (num) => {
//   return num * num;
// };

// var square = (num) => num * num;

var square = num => num * num;

var sayHello = ()=> console.log("Hello");


var multiple = (num1,num2)=> {
    var result = num1 * num2;
    return result;
}

sayHello();

console.log(multiple(2,3));

const result = square(3);

console.log(result);
