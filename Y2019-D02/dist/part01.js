"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intCode_1 = require("./intCode");
var test1 = [1, 0, 0, 0, 99];
var test2 = [2, 3, 0, 3, 99];
var test3 = [2, 4, 4, 5, 99, 0];
var test4 = [1, 1, 1, 4, 99, 5, 6, 0, 99];
intCode_1.IntCode.processProgram(test1);
intCode_1.IntCode.processProgram(test2);
intCode_1.IntCode.processProgram(test3);
intCode_1.IntCode.processProgram(test4);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(JSON.stringify(test4));
//part 1 result 
intCode_1.IntCode.processProgram(intCode_1.intProgram);
console.log(JSON.stringify(intCode_1.intProgram));
//# sourceMappingURL=part01.js.map