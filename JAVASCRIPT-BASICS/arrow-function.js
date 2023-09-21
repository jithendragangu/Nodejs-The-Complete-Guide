const name = 'Max';
let age = 29;
const hobby = 'Bowling';


const summarizeUser =  (userName,userAge,userHobby)=>{
return 'Name  is '+userName+' age is '+userAge+' and the user has hobbies '+userHobby;
}

const add = (a,b)=>{
return a+b;
}

// const add = (a,b)=>a+b;

// const addOne = a=>a+1;

//const addRandom = ()=>3+2;

const value = summarizeUser(name,age,hobby);


console.log(add(3,6));
console.log(addOne(2));

console.log(value);






