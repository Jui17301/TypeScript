var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username : ".concat(this.userName, ",age : ").concat(this.age));
    };
    return User;
}());
// class Object
var user1 = new User("Jui", 22);
user1.dispaly();
var user2 = new User("Juii", 23);
user2.dispaly();
// user1 - name: anisul islam ,age : 23;
// user2 - name: Islam ,age : 33;
