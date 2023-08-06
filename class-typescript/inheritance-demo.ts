
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

class Student extends User{

  studentId : number;

  constructor(userName : string,age : number,studentId : number){

    super(userName,age);
    this.studentId = studentId;
 
  }
  display():void{
    console.log(`username : ${this.userName},age : ${this.age},id : ${this.studentId}`);
  }


}

let Student1 = new Student("jui",31,876544);
Student1.display();
// class Object

// let user1 = new User("Jui",22);
// user1.dispaly();
// let user2 = new User("Juii",23);
// user2.dispaly();

// user1 - name: anisul islam ,age : 23;
// user2 - name: Islam ,age : 33;