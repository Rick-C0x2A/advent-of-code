import { intProgram, IntCode } from './intCode';


for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
        let program = IntCode.copyInputs(intProgram);
        program[1] = noun;
        program[2] = verb;
        IntCode.processProgram(program);
        if (program[0] == 19690720) {
            // part 2 result
            console.log(100 * noun + verb);
            break;
        }
    }

}
