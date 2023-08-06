interface IUser{
  id : number,
  name : string;
  age : number,
}

let users :IUser[] = [];
let user1 :IUser ={
  id : 1,
  name : "Sumaiya Siddiqa Jui",
  age : 32
}
let user2 : IUser={
  id : 2,
  name : "Sumaiya Jui",
  age : 23
}

users.push(user1);
users.push(user2);
// console.log(users)

const printUserInfo =(user : IUser)=>{
console.log(`userId = ${user.id},name=${user.name},age = ${user.age}`)
}
users.forEach(user => printUserInfo(user));


