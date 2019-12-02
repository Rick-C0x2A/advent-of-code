"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intProgram = [1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 6, 1, 19, 1, 19, 5, 23, 2, 10, 23, 27, 2, 27, 13, 31, 1, 10, 31, 35, 1, 35, 9, 39, 2, 39, 13, 43, 1, 43, 5, 47, 1, 47, 6, 51, 2, 6, 51, 55, 1, 5, 55, 59, 2, 9, 59, 63, 2, 6, 63, 67, 1, 13, 67, 71, 1, 9, 71, 75, 2, 13, 75, 79, 1, 79, 10, 83, 2, 83, 9, 87, 1, 5, 87, 91, 2, 91, 6, 95, 2, 13, 95, 99, 1, 99, 5, 103, 1, 103, 2, 107, 1, 107, 10, 0, 99, 2, 0, 14, 0];
var IntCode = /** @class */ (function () {
    function IntCode() {
    }
    IntCode.processOpCode = function (pos, program) {
        var val1 = program[program[pos + 1]];
        var val2 = program[program[pos + 2]];
        var result = program[pos + 3];
        switch (program[pos]) {
            case 1:
                program[result] = val1 + val2;
                break;
            case 2:
                program[result] = val1 * val2;
                break;
        }
    };
    IntCode.processProgram = function (program) {
        var i = 0;
        while (program[i] != 99) {
            this.processOpCode(i, program);
            i = i + 4;
        }
    };
    IntCode.copyInputs = function (program) {
        var cpy = new Array();
        program.forEach(function (element) {
            cpy.push(element);
        });
        return cpy;
    };
    return IntCode;
}());
exports.IntCode = IntCode;
//# sourceMappingURL=intCode.js.map