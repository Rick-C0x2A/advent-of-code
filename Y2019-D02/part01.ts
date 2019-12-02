import { intProgram, IntCode } from './intCode';



const test1 = [1, 0, 0, 0, 99];
const test2 = [2, 3, 0, 3, 99];
const test3 = [2, 4, 4, 5, 99, 0];
const test4 = [1, 1, 1, 4, 99, 5, 6, 0, 99];

IntCode.processProgram(test1);
IntCode.processProgram(test2);
IntCode.processProgram(test3);
IntCode.processProgram(test4);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(JSON.stringify(test4));

//part 1 result 
IntCode. processProgram(intProgram);
console.log(JSON.stringify(intProgram));

