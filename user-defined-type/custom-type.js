var users;
users = [];
var user1;
user1 = { userName: "abis", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "rabu", userId: 102 };
users.push(user2);
console.log(users);
var getRequest;
getRequest = "GET";
// example 3 :
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
