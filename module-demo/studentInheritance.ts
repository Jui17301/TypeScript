export class Student extends User{

  studentId : number;

  constructor(userName : string,age : number,studentId : number){

    super(userName,age);
    this.studentId = studentId;
 
  }
  display():void{
    console.log(`username : ${this.userName},age : ${this.age},id : ${this.studentId}`);
  }


}