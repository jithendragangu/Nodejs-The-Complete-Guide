var name = 'Max';
var age = 29;
var hobby = 'Bowling';

function summarizeUser(userName,userAge,userHobby){
return 'Name  is '+userName+' age is '+userAge+' and the user has hobbies '+userHobby;
}

function square(num){
    var value = num * num;
    return value;
}

function printData(data){
    console.log(data);
    return data;
}

const value = summarizeUser(name,age,hobby);
const value1 = printData('Ajith');

console.log(square(5));
console.log(value);
console.log(value1);
console.log(name);





