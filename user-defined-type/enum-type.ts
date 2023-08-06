
// enum - store constants ; duplicate value is not allowed

 /// enum types : numeric,string,hetergenous


 // numeric enum : 
 enum RequestType{
   readData=5,
   saveData=10,
   deleteData,
 }

 console.log(RequestType);
 console.log(RequestType.readData);
 console.log(RequestType["readData"]);

 // string enum : 

 enum RequestTypeString{
  readData =  "READ_DATA",
  deleteData = "DELETE_DATA",
 }

 console.log(RequestTypeString.deleteData);

 // hetergenous enum :

 enum RequestTypeHetergenous{
  readData =  "READ_DATA",
  deleteData = "DELETE_DATA",
  id = 101,
 }
 console.log(RequestTypeHetergenous);
