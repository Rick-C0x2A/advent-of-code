import { modules, Fuel } from './fuel';

// Basic tests part 01
console.log(Fuel.forOneModulePart01(12) == 2 ? true : false);
console.log(Fuel.forOneModulePart01(14) == 2 ? true : false);
console.log(Fuel.forOneModulePart01(1969) == 654 ? true : false);
console.log(Fuel.forOneModulePart01(100756) == 33583 ? true : false);
// Final result part 02
console.log(Fuel.forAllModulesPart01(modules));