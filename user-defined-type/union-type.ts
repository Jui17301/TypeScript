
let userId : (string | number | boolean);

userId = "102";
userId = 234 ; 
userId = true ; 


function displayUserInfo(userId : string){
  console.log(userId);
}
displayUserInfo("101"); // error