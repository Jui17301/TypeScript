// function signature start---
var userInfo1;
var userInfo2;
var userInfo3;
// signature end
userInfo1 = function () {
    console.log("Sumaiya Siddiqa Jui");
};
userInfo2 = function (name) {
    console.log("Name : ".concat(name));
};
userInfo3 = function (name, age) {
    return "Name : ".concat(name, " and Age : ").concat(age);
};
userInfo1();
userInfo2("JUI");
userInfo3('Suju', 1912020087);
console.log(userInfo3('Suju', 1912020087));
