// built-in type : number,string,boolean,void,undefined,null
var userId;
var firstName;
var middleName;
var lastName;
var fullName;
var isActivated;
userId = 1912020087;
firstName = "Sumaiya";
middleName = "Siddiqa";
lastName = " Jui";
isActivated = true;
fullName = firstName.concat(middleName, lastName);
console.log("My Id : ".concat(userId, ",userName : ").concat(firstName, ",account Activation : ").concat(isActivated, ",FullName : ").concat(fullName));
console.log(fullName.split(" "));
console.log(fullName.split(""));
console.log(fullName.toLowerCase());
function display() {
    console.log('I am from display');
}
display();
