var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var EngineType;
(function (EngineType) {
    EngineType[EngineType["v4"] = 0] = "v4";
    EngineType[EngineType["v6"] = 1] = "v6";
    EngineType[EngineType["v8"] = 2] = "v8";
    EngineType[EngineType["v12"] = 3] = "v12";
    EngineType[EngineType["Diesel"] = 4] = "Diesel";
})(EngineType || (EngineType = {}));
class Engine {
}
class Model {
}
class CarModel {
    constructor(model, engine) {
        this.model = model;
        this.engine = engine;
    }
}
let CarModelService = class {
    constructor(_http) {
        this._http = _http;
        this._url = '/carmodels.json';
    }
};
CarModelService = __decorate([
    angular2_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], CarModelService);
exports.CarModelService = CarModelService;
