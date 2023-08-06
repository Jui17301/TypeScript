
// let user1 :{
//   userName: string,
//   userId : number,
// };
// user1 ={
//   userName: 'Jui',
//   userId : 87
// };
// console.log(user1);




// let users : object;
// users ={name : 'Jui'}
// console.log(users);


// let users : object[];
// users =[{name : '87654'},{name : 'lucky'}]


// let user1 : { userName : string , userId?: number };
// user1 ={ userName : 'Jui'};
// console.log(user1);



// let user1 : { userName : string , userId: number };
// user1 ={ userName : 'Jui',userId: 1912020087};
// console.log(user1);



let  users : object[];
users = [];

let user1 : { userName : string , userId ?: number};
user1 = {userName: 'suju'}

let user2 : { userName : string , userId ?: number};
user2 = {userName: 'jui', userId: 1912020098}
users.push(user1);
users.push(user2);
console.log(users);




////

for(const key in users){

  console.log(users[key]['userName']);

}