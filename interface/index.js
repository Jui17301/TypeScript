var users = [];
var user1 = {
    id: 1,
    name: "Sumaiya Siddiqa Jui",
    age: 32
};
var user2 = {
    id: 2,
    name: "Sumaiya Jui",
    age: 23
};
users.push(user1);
users.push(user2);
// console.log(users)
var printUserInfo = function (user) {
    console.log("userId = ".concat(user.id, ",name=").concat(user.name, ",age = ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
