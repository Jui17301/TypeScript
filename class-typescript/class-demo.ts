
class User{
  // properties,methods,constructor
 userName: string;
 age : number;

constructor(userName : string,age : number){
  this.userName = userName;
  this.age = age ; 
}

display():void{
  console.log(`username : ${this.userName},age : ${this.age}`);
}

}
// class Object

let user1 = new User("Jui",22);
user1.dispaly();
let user2 = new User("Juii",23);
user2.dispaly();

// user1 - name: anisul islam ,age : 23;
// user2 - name: Islam ,age : 33;