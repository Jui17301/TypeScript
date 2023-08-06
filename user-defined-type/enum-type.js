// enum - store constants ; duplicate value is not allowed
/// enum types : numeric,string,hetergenous
// numeric enum : 
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 5] = "readData";
    RequestType[RequestType["saveData"] = 10] = "saveData";
    RequestType[RequestType["deleteData"] = 11] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType.readData);
console.log(RequestType["readData"]);
// string enum : 
var RequestTypeString;
(function (RequestTypeString) {
    RequestTypeString["readData"] = "READ_DATA";
    RequestTypeString["deleteData"] = "DELETE_DATA";
})(RequestTypeString || (RequestTypeString = {}));
console.log(RequestTypeString.deleteData);
// hetergenous enum :
var RequestTypeHetergenous;
(function (RequestTypeHetergenous) {
    RequestTypeHetergenous["readData"] = "READ_DATA";
    RequestTypeHetergenous["deleteData"] = "DELETE_DATA";
    RequestTypeHetergenous[RequestTypeHetergenous["id"] = 101] = "id";
})(RequestTypeHetergenous || (RequestTypeHetergenous = {}));
console.log(RequestTypeHetergenous);
