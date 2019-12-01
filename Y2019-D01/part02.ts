import { modules, Fuel } from './fuel';

// Basic tests part 02
console.log(Fuel.forOneModulePart02(14) == 2 ? true : false);
console.log(Fuel.forOneModulePart02(1969) == 966 ? true : false);
console.log(Fuel.forOneModulePart02(100756) == 50346 ? true : false);
// Final result part 02
console.log(Fuel.forAllModulesPart02(modules));