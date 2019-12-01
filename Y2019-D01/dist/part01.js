"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fuel_1 = require("./fuel");
// Basic tests part 01
console.log(fuel_1.Fuel.forOneModulePart01(12) == 2 ? true : false);
console.log(fuel_1.Fuel.forOneModulePart01(14) == 2 ? true : false);
console.log(fuel_1.Fuel.forOneModulePart01(1969) == 654 ? true : false);
console.log(fuel_1.Fuel.forOneModulePart01(100756) == 33583 ? true : false);
// Final result part 02
console.log(fuel_1.Fuel.forAllModulesPart01(fuel_1.modules));
//# sourceMappingURL=part01.js.map