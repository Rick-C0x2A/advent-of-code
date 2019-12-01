"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modules = [56017, 141632, 71303, 148129, 59828, 83478, 136501, 97611, 92298, 107697, 102886, 57037, 58458, 121031, 119944, 147894, 110097, 146857, 137133, 126985, 81583, 106275, 130025, 99276, 76704, 105244, 111534, 110405, 88847, 106736, 109562, 112705, 50061, 146911, 143213, 126404, 131161, 82251, 56396, 86306, 110074, 94474, 113640, 60274, 102171, 97755, 142020, 100304, 100155, 80432, 124345, 79730, 105762, 114971, 141583, 135170, 87585, 105794, 101571, 62313, 62865, 136660, 121434, 67603, 53325, 76232, 93160, 99580, 90716, 102187, 115997, 134281, 64593, 87597, 131885, 68041, 88209, 136400, 127058, 141613, 66822, 62441, 136063, 134204, 52078, 135123, 95428, 91311, 55524, 97099, 80454, 91710, 130396, 130089, 127464, 86160, 53158, 64908, 98321, 112176];
var Fuel = /** @class */ (function () {
    function Fuel() {
    }
    Fuel.forOneModulePart01 = function (mass) {
        return (Math.floor(mass / 3) - 2);
    };
    Fuel.forAllModulesPart01 = function (masses) {
        var _this = this;
        var total = 0;
        masses.forEach(function (module) {
            total += _this.forOneModulePart01(module);
        });
        return total;
    };
    Fuel.forOneModulePart02 = function (mass) {
        var result = (Math.floor(mass / 3) - 2);
        return result + this.includeAdditionalFuel(result);
    };
    Fuel.includeAdditionalFuel = function (mass) {
        var result = this.forOneModulePart01(mass);
        return result > 0 ? result + this.includeAdditionalFuel(result) : 0;
    };
    Fuel.forAllModulesPart02 = function (masses) {
        var _this = this;
        var total = 0;
        masses.forEach(function (module) {
            total += _this.forOneModulePart02(module);
        });
        return total;
    };
    return Fuel;
}());
exports.Fuel = Fuel;
//# sourceMappingURL=fuel.js.map