// function signature start---
let userInfo1 : ()=> void;
let userInfo2 : (name : string)=> void;
let userInfo3 : (name : string,age : number)=> string;

// signature end
userInfo1=()=>{
  console.log("Sumaiya Siddiqa Jui");
};
userInfo2=(name : string)=>{
  console.log(`Name : ${name}`);
};
userInfo3=(name : string,age : number)=>{
  return `Name : ${name} and Age : ${age}`;
};
userInfo1();
userInfo2("JUI");
userInfo3('Suju',1912020087);
console.log(userInfo3('Suju',1912020087))