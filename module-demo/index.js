"use strict";
// import { studentName as name,studentAge as age,dispalyInfo } from "./student";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = require("./student");
function dispalyInfo() {
    console.log("".concat(Student.studentName, ",").concat(Student.studentAge));
}
dispalyInfo();
