var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
class Engine {
    EmissionTest(co2Level) {
        return false;
    }
}
exports.Engine = Engine;
class PetrolEngine {
    constructor(allowedCo2Level) {
        this.allowedCo2Level = allowedCo2Level;
    }
    EmissionTest(co2Level) {
        return this.allowedCo2Level < co2Level;
    }
}
PetrolEngine = __decorate([
    __param(0, angular2_1.Inject('allowedCo2Level')), 
    __metadata('design:paramtypes', [Number])
], PetrolEngine);
exports.PetrolEngine = PetrolEngine;
class DieselEngine {
    constructor(allowedCo2Level) {
        this.allowedCo2Level = allowedCo2Level;
    }
    EmissionTest(co2Level) {
        if (this.hasEmbeddedCheatChip)
            return true;
        return this.allowedCo2Level < co2Level;
    }
}
DieselEngine = __decorate([
    __param(0, angular2_1.Inject('allowedCo2Level')), 
    __metadata('design:paramtypes', [Number])
], DieselEngine);
exports.DieselEngine = DieselEngine;
testbinding =
    angular2_1.bind(PetrolEngine).toClass(PetrolEngine);
exports.ENGINE_BINDING = [
    angular2_1.bind(PetrolEngine).toClass(PetrolEngine),
    angular2_1.bind(DieselEngine).toClass(DieselEngine)
];
