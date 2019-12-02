"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intCode_1 = require("./intCode");
for (var noun = 0; noun < 100; noun++) {
    for (var verb = 0; verb < 100; verb++) {
        var program = intCode_1.IntCode.copyInputs(intCode_1.intProgram);
        program[1] = noun;
        program[2] = verb;
        intCode_1.IntCode.processProgram(program);
        if (program[0] == 19690720) {
            // part 2 result
            console.log(100 * noun + verb);
            break;
        }
    }
}
//# sourceMappingURL=part02.js.map