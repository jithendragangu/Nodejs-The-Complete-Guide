const colors = ['blue','green','red','black',1,true,{name:"ajith",crush:'anupama'}]

// console.log(colors)
// console.log(colors[0]);
// console.log(colors[6]['name']);

const user = {
    name:'ajith',
    crush:'anupama'
}

function userDetail(user,field){
console.log(user[field])
}

userDetail(user,'name');