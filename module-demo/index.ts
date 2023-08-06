// import { studentName as name,studentAge as age,dispalyInfo } from "./student";

import * as Student from "./student";

function dispalyInfo(): void{
  console.log(`${Student.studentName},${Student.studentAge}`);

}

dispalyInfo();