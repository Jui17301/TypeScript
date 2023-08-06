// example 1
type User = {userName : string;userId : number};

let users : User[]
users =[];

let user1 : User;
user1 = {userName : "abis" ,userId : 101};
users.push(user1);

let user2 : User
user2 = {userName : "rabu",userId : 102};
users.push(user2);

console.log(users);



// example 2 :

type RequestType = "GET" | "POST";
let getRequest : RequestType;
getRequest = "GET";



// example 3 :

function requestHandler(requestType : RequestType){

  console.log(requestType)

}
requestHandler("GET");

