// built-in type : number,string,boolean,void,undefined,null

let userId:number;
let firstName : string;
let middleName : string;
let lastName : string;
let fullName : string ;
let isActivated : boolean ;


userId = 1912020087;
firstName = "Sumaiya";
middleName = "Siddiqa";
lastName = " Jui";
isActivated = true ; 
fullName = firstName.concat(middleName,lastName);

console.log(`My Id : ${userId},userName : ${firstName},account Activation : ${isActivated},FullName : ${fullName}`);

console.log(fullName.split(" "));
console.log(fullName.split(""));
console.log(fullName.toLowerCase());


function display() : void{
  console.log('I am from display')
}
display();
